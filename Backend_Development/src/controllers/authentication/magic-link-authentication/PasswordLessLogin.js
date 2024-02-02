const { AORModel } = require("../../../model/AORModel");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

// Make email template for magic link
const emailTemplate = ({ email, link }) => `
<div style="margin: 0; padding: 0; width: 100%; display: flex; justify-content: center; align-items: center; height: 100vh;">
  <div style="background-color: #f5f5f5; width: 95%; height: fit-content; padding: 0px; max-width: 600px; margin: 20px; border-top-left-radius: 15px; overflow: hidden; box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);">
    <h2 style="padding: 20px 6px; background-color: #6ec369; text-align: center; color: #023863; font-weight: 800;">RENTIF<span style=" background-color: #a64ac9; color: white; padding: 2px 4px; border-radius: 4px; margin-left: 2px;">AI</span></h2>
    <div style="padding: 20px; font-size: 16px; color: #333;">
      <p>Hii! ${email?.toString().split("@")[0]} </p>
      <p>Here's the Magic Link For your Login.</p>
      <p>Once you are verified you will be navigated to our dashboard.</p>
    </div>
    <p style="padding-left: 20px;">${link}</p>
    <p style="text-align: center; background-color: #a64ac9; color: white; font-weight: 600; padding: 20px 6px;">Thanks for joining with us!</p>
  </div>
</div>`;

const PasswordLessLogin = async (req, res) => {
  const { email, role } = req.body;

  if (email === "" || email === undefined) {
    return res.status(400).json({
      success: "failed",
      message: "Please provide email address.",
    });
  }

  // This response message is only for the development purpuse.
  // Because the user/owner is not going to interact with it.
  // This validation is done by the devveloper primarialy.
  if (role === "" || role === undefined) {
    return res.status(400).json({
      success: "failed",
      message: "Role should be mentioned.",
    });
  }

  try {
    await AORModel.findOne({
      email: email,
    }).then(async (user) => {
      if (user) {
        // Generating JWT token
        // This Magic token is valid for 2 minutes.
        // Within 15 minutes the user have to login through the link other wise it will be expired after 2 minutes.
        const magicToken = jwt.sign(
          { email: email },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "15m",
          }
        );

        const link = `${process.env.BACKEND_DEV_URL}/rentifai/auth/validate-user?email=${email}&token=${magicToken}&role=${role}`;

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
          from: "RENTIFAI LOGIN <noreply@gmail.com>",
          to: email,
          subject: "Magic Link. Password less login redirection.",
          html: emailTemplate({
            email,
            link: link,
          }),
        };

        // Sending Mail through the transporter
        await transporter.sendMail(message, (error) => {
          if (error) {
            res.status(404);
            res.send("Can't send email.");
          } else {
            res.status(200).json({
              status: "OK",
              message: "Please check your email to get the magic link.",
            });
          }
        });
      } else {
        res.status(400).json({
          success: "failed",
          message: "You are not registered, Please SignUp!",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// This controller is designed for validating the user at gmail console.
const ValidatingUserAtGmailConsole = async (req, res) => {
  const { email, token, role } = req.query;

  if (!token) {
    return res
      .status(403)
      .json({ message: "Token is not okay! Please try again." });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, decoded) => {
      if (error || decoded.email !== email) {
        return res
          .status(400)
          .json({ message: "Invalid authentication token!" });
      }

      // At this point the user is validated with correct email and token
      // Now we have to create access and refresh token and send it to the client
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

      // We also have to store our refresh token in our database
      await AORModel.findOneAndUpdate(
        { email: email },
        { refreshToken: refreshToken }
      );

      // redirecting to the cliant side
      if (role === "owner") {
        res.cookie("jwt_rentifai", refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "None",
          maxAge: 24 * 60 * 60 * 1000,
          domain: process.env.DEV_DOMAIN,
        });

        res.redirect(
          `${process.env.FRONTEND_DEV_URL}/owner-list?accessToken=${accessToken}`
        );
      }

      if (role === "user") {
        res.cookie("jwt_rentifai", refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "None",
          maxAge: 24 * 60 * 60 * 1000,
          domain: process.env.DEV_DOMAIN,
        });

        res.redirect(
          `${process.env.FRONTEND_DEV_URL}/user-rent/home?accessToken=${accessToken}`
        );
      }
    });
  } catch {
    return res.status(403).json({ message: "Invalid auth credentials." });
  }
};

module.exports = { PasswordLessLogin, ValidatingUserAtGmailConsole };
