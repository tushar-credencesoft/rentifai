const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AORModel } = require("../../../model/AORModel");

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (
    email === "" ||
    password === "" ||
    email === undefined ||
    password === undefined
  ) {
    return res.status(400).json({
      success: "failed",
      message: "Please Enter Email and Password",
    });
  }

  try {
    await AORModel.findOne({
      email: email,
    }).then((data) => {
      if (data) {
        // console.log(data.password, data.phone);
        // Comparing the entered password with encrypted password from database.
        if (data.password) {
          bcrypt.compare(password, data.password, async (error, result) => {
            if (error) {
              return res.status(400).json({ message: error.message });
            }
            if (result) {
              // Access and Refresh token is handeled by the admin.
              // future todo.
              const accessToken = jwt.sign(
                { email: email },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "1h" }
              );

              const refreshToken = jwt.sign(
                { email: email },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: "1d" }
              );

              // saving the refreshToken in database
              await AORModel.findOneAndUpdate(
                { email: email },
                { refreshToken: refreshToken }
              );

              // httpOnly: true, will make our token more secure.
              // secure: true, for production https server.
              // sameSite: "None",
              res.cookie("jwt_rentifai", refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "None",
                maxAge: 24 * 60 * 60 * 1000,
                domain: process.env.DEV_DOMAIN,
              });
              res.status(200).json({
                message: "Successfully Logged In",
                accessToken: accessToken,
              });
            } else {
              return res
                .status(400)
                .json({ success: "failed", message: "Password didn't match." });
            }
          });
        } else {
          return res.status(400).json({
            success: "failed",
            message:
              "You have registered your email through magic link, Please go through that.",
          });
        }
      } else {
        return res.status(401).json({
          success: "failed",
          message: "This Email address is not yet Registered. Please SignUp.",
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { Login };
