const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { AORModel } = require("../../../model/AORModel");
const jwt = require("jsonwebtoken");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_CLIANTID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIANT_SECRETE,
      callbackURL: "/rentifai/auth/google/callback",
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      const REFRESH_TOKEN = jwt.sign(
        { email: profile.emails[0].value },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      // Mongoose queries to save the user details in the database
      try {
        let user = await AORModel.findOne({ email: profile.emails[0].value });
        if (!user) {
          user = new AORModel({
            full_name: profile.displayName,
            email: profile.emails[0].value,
            refreshToken: REFRESH_TOKEN,
          });
          await user.save();
        } else {
          await AORModel.findOneAndUpdate(
            { email: profile.emails[0].value },
            { refreshToken: REFRESH_TOKEN }
          );
        }
        cb(null, user);
      } catch (error) {
        return cb(error, null);
      }
    }
  )
);

// To decode the seccion id
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
