const { AORModel } = require("../../../model/AORModel");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const path = require("path");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Email Page Template
const emailTemplate = ({ email, link }) => `
<div style="margin: 0; padding: 0; width: 100%; display: flex; justify-content: center; align-items: center; height: 100vh;">
  <div style="background-color: #f5f5f5; width: 95%; height: fit-content; padding: 0px; max-width: 600px; margin: 20px; border-top-left-radius: 15px; overflow: hidden; box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);">
    <h2 style="padding: 20px 6px; background-color: #6ec369; text-align: center; color: #023863; font-weight: 800;">RENTIF<span style=" background-color: #a64ac9; color: white; padding: 2px 4px; border-radius: 4px; margin-left: 2px;">AI</span></h2>
    <div style="padding: 20px; font-size: 16px; color: #333;">
      <p>Hii! ${email?.toString().split("@")[0]} </p>
      <p>Here's the Magic link to reset your password.</p>
      <p>Once you reset your password then you will be navigated to our login page.</p>
    </div>
    <p style="padding-left: 20px;">${link}</p>
    <p style="text-align: center; background-color: #a64ac9; color: white; font-weight: 600; padding: 20px 6px;">Thanks for joining with us!</p>
  </div>
</div>`;

const ForgotPassword = async (req, res) => {
  try {
    const { email, role } = req.body;
    // First We have to make sure that the user is previously exists in the data base.
    const userFromDB = await AORModel.findOne({ email: email });

    if (!userFromDB) {
      return res
        .status(401)
        .json({ message: "User is not registered yet!. Please SignUp." });
    }

    // Generating token for Forgot password
    const forgotPasswordToken = jwt.sign(
      { email: email },
      process.env.JWT_SECRET_KEY + userFromDB.password,
      { expiresIn: "15m" }
    );
    const link = `${process.env.BACKEND_DEV_URL}/rentifai/auth/reset-password/${userFromDB.email}/${forgotPasswordToken}/${role}`;

    // sending email config
    let config = {
      service: "gmail",
      auth: {
        user: process.env.RENTIFAI_EMAIL,
        pass: process.env.RENTIFAI_PASSWORD,
      },
    };
    // creating transporter
    let transporter = nodemailer.createTransport(config);
    // html structure for OTP page inside the gmail
    const message = {
      from: "RENTIFAI FORGOT PASSWORD <noreply@gmail.com>",
      to: email,
      subject: "Redirection Link for Reset Password.",
      html: emailTemplate({
        email: email,
        link: link,
      }),
    };

    // Sending Mail through the transporter
    await transporter.sendMail(message, (error) => {
      if (error) {
        res.status(404);
        res.send("Error While Updating the Password.");
      } else {
        res.status(200).json({
          status: "OK",
          message:
            "Please check your email to get the link to update the password.",
          reset_password_magic_link: link,
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

const GetEmailAndTokenFromEmail = async (req, res) => {
  const { email, forgotPasswordToken, role } = req.params;

  const userFromDB = await AORModel.findOne({ email: email });
  if (!userFromDB) {
    return res.status(401).json({ message: "Invalid Email Please Try Again." });
  }

  // Now we have a valid user in this email
  // Let's Verify the token because our token is valid for 15mins
  try {
    jwt.verify(
      forgotPasswordToken,
      process.env.JWT_SECRET_KEY + userFromDB.password,
      (error, decode) => {
        if (error) {
          return res
            .status(403)
            .json({ message: "Token has expired. Please Try Again." });
        }
        return res.render(
          path.join(__dirname, "..", "..", "..", "view", "reset-password"),
          { email: email, role: role }
        );
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const ResetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === "" ||
      password === "" ||
      email === undefined ||
      password === undefined
    ) {
      return res.status(400).json({
        message:
          "Unable to reset Password due to Invalid authentication details.",
      });
    }

    const userFromDB = await AORModel.findOne({ email: email });

    if (!userFromDB) {
      return res
        .status(401)
        .json({ message: "Invalid Email Please Try Again." });
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        return res.status(400).json({
          statusCode: 400,
          message: "Error for updating the password",
        });
      } else {
        // Storing hashed password in DB.
        // Saving the new document in mongodb.
        await AORModel.findOneAndUpdate({ email: email }, { password: hash });
        res.status(200).json({ message: "Password updated successfully" });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { ForgotPassword, ResetPassword, GetEmailAndTokenFromEmail };
