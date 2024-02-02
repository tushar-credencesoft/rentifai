const jwt = require("jsonwebtoken");
const { AORModel } = require("../../../model/AORModel");

// These three endpoints are depended on googles authentication process.
const GoogleLoginFailed = (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
};

const GoogleLoginSuccess = async (req, res) => {
  if (req.user) {
    const ACCESS_TOKEN = jwt.sign(
      { email: req.user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    // other options will be added during production
    const userFromDB = await AORModel.findOne({ email: req.user.email });
    if (userFromDB) {
      res.cookie("jwt_rentifai", userFromDB.refreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
        domain: process.env.DEV_DOMAIN,
      });
      res.status(200).json({
        error: false,
        message: "Successfully Loged In",
        accessToken: ACCESS_TOKEN,
      });
    } else {
      res.status(403).json({ error: true, message: "Not Authorized" });
    }
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
};

const GoogleLogout = (req, res) => {
  req.logout();
  res.redirect(`${process.env.FRONTEND_DEV_URL}`);
};

// Exporting the modules
module.exports = {
  GoogleLoginFailed,
  GoogleLoginSuccess,
  GoogleLogout,
};
