const express = require("express");
const app = express();
require("dotenv").config();
require("./controllers/authentication/google-authentication/passport");
require("ejs");
const DatabaseConnector = require("./db-connection/mongodb_connector");
const AuthRouter = require("./routes/AuthRouter");
const CarDetailsRouter = require("./routes/CarDetailsRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const { verifyJWT } = require("./middlewares/verifyJWT");
const { credentials } = require("./middlewares/credentials");
const expressSession = require("express-session");
const passport = require("passport");
const path = require("path");

// DB connection
DatabaseConnector().catch((err) => console.log(err));

// Set the views directory to the correct path
app.set("views", path.join(__dirname, "view"));

//Server side rendering
app.set("view engine", "ejs");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(credentials);
app.use(cors(corsOptions));
app.use(cookieParser());

// It will create an encrypted session.
// By decoding the session id we can get data of the user.
// when ever the cliant hit the /login/success url then in the req.user we will able to get all the data from google.
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
//settup passport
app.use(passport.initialize());
app.use(passport.session());

// Initializing google oauth
app.get(
  "/rentifai/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/rentifai/auth/google/callback",
  (req, res, next) => {
    // Extract query parameters
    const role = req.query.role;

    // Set default redirect URL
    let redirectUrl = `${process.env.FRONTEND_DEV_URL}`;

    // Check if customParam exists and adjust the redirect URL accordingly
    if (role === "user") {
      redirectUrl = `${process.env.FRONTEND_DEV_URL}/user-rent/home`;
    }

    if (role === "owner") {
      redirectUrl = `${process.env.FRONTEND_DEV_URL}/owner-list`;
    }

    // Store customParam in session or use it as needed
    // req.session.role = role;

    // Set the success redirect URL dynamically
    req.session.successRedirect = redirectUrl;

    // Continue to the next middleware (passport authentication)
    next();
  },
  passport.authenticate("google", {
    // For Successful Login: send to dashboard
    successRedirect: (req) => req.session.successRedirect,
    // For Failure Login: send to Login Page
    failureRedirect: `${process.env.FRONTEND_DEV_URL}`,
  })
);

// Health Check
app.get("/health-check", (req, res) => {
  return res
    .status(200)
    .json({
      success: "OK",
      message: "Hello rentifai users we are live now 🚀.",
    });
});

//authentication routes
app.use("/rentifai/auth", AuthRouter);

// car-details routes
app.use("/rentifai/feature", CarDetailsRouter);

// Welcome Message
app.get("/rentifai/welcome", verifyJWT, (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to Rentifai Authentication Server." });
});

app.listen(process.env.PORT, () => {
  console.log(`Rentifai server is running on PORT ${process.env.PORT} 🚀.`);
});
