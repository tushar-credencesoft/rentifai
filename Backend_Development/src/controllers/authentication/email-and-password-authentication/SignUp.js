const { AORModel } = require("../../../model/AORModel");
const { TempEmailOTPModel } = require("../../../model/tempEmailAndOtpModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const nodemailer = require("nodemailer");

const OtpSenderToEmailTemplate = ({ email, generatedOTP }) => {
  return `
  <div style="margin: 0; padding: 0; width: 100%; display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div style="background-color: #f5f5f5; width: 95%; height: fit-content; padding: 0px; max-width: 600px; margin: 20px; border-top-left-radius: 15px; overflow: hidden; box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);">
      <h2 style="padding: 20px 6px; background-color: #6ec369; text-align: center; color: #023863; font-weight: 800;">RENTIF<span style=" background-color: #a64ac9; color: white; padding: 2px 4px; border-radius: 4px; margin-left: 2px;">AI</span></h2>
      <div style="padding: 20px; font-size: 16px; color: #333;">
        <p>Hii! ${email?.toString().split("@")[0]} </p>
        <p>One Time Password</p>
      </div>
      <p style="padding-left: 20px; font-size: 24px; font-weight: 700;">${generatedOTP}</p>
      <p style="text-align: center; background-color: #a64ac9; color: white; font-weight: 600; padding: 20px 6px;">Thanks for joining with us!</p>
    </div>
  </div>
  `;
};

const VerifyEmail = async (req, res) => {
  const { email } = req.body;
  try {
    if (email === "" || email === undefined) {
      return res
        .status(400)
        .json({ message: "Please Enter Email Address." });
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      // If there is any space in the email address or we miss @ symbol then this condition satisfied.
      return res
        .status(400)
        .json({ message: "Please Enter a valid Email Address." });
    } else {
      // sending OTP to email
      const generatedOTP = Math.floor(100000 + Math.random() * 900000);
      // 2 minutes
      const expiryDate = Date.now() + 180000;
      // console.log(`DATE: ${expiryDate}`);

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
        from: "RENTIFAI <noreply@gmail.com>",
        to: email,
        subject: "One Time Password",
        html: OtpSenderToEmailTemplate({
          email: email,
          generatedOTP: generatedOTP,
        }),
      };

      // Sending Mail through the transporter
      await transporter.sendMail(message);

      // Storing the OTP and expiery time of the otp into the database
      const searchedTempUser = await TempEmailOTPModel.findOne({
        email: email,
      });

      // Checling the email is previously exists or not.
      if (searchedTempUser) {
        // update its otp and expiary date
        await TempEmailOTPModel.findOneAndUpdate(
          { email: email },
          { $set: { otp: generatedOTP, otpExpiryDate: expiryDate } }
        );
        return res.status(201).json({
          status: "success",
          message: "OTP has been sent to the provided email.",
        });
      } else {
        const tempUser = new TempEmailOTPModel({
          email: email,
          otp: generatedOTP,
          otpExpiryDate: expiryDate,
        });
        await tempUser.save().then((result) => {
          if (result) {
            return res.status(201).json({
              status: "success",
              message: "OTP has been sent to the provided email.",
            });
          } else {
            return res
              .status(400)
              .json({ message: "Error While Generating OTP." });
          }
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// This controller will verify the user inputed OTP with the otp stored in the database.
// With in 2 minute the user have to paste the otp other wise it will delete taht document from the db.
// And Fails the Registration.
const VerifyOTP = async (req, res) => {
  const {
    email,
    phone,
    otp,
    full_name,
    password,
    driving_license_number,
    role,
  } = req.body;
  // email, password and full_name must be validated in frontend.
  try {
    if (otp === "" || otp === undefined) {
      return res.status(400).json({ message: "Please Enter the OTP." });
    }

    // Future todo.
    // It will be properly indexed.
    await TempEmailOTPModel.findOne({
      email: email,
    }).then(async (user) => {
      if (user) {
        const currentDate = Date.now();
        const otpExpiryDate = user.otpExpiryDate;

        // Check if OTP has expired
        if (currentDate > otpExpiryDate) {
          return res
            .status(400)
            .json({ status: "failed", message: "Sorry this otp has expired!" });
        } else {
          const otpFromDB = user.otp;

          if (otp === otpFromDB) {
            // console.log("Hey I am here");
            // Password Hashing
            bcrypt.hash(password, saltRounds, async (err, hash) => {
              if (err) {
                return res.status(400).json({
                  statusCode: 400,
                  message: "Error for hashing password",
                });
              } else {
                // Checking the user is previously existed or not.
                const UserFromDB = await AORModel.findOne({ email: email });

                // If the user is not exists.
                // Then directly store the user.
                if (!UserFromDB) {
                  // Storing hashed password in DB.
                  // Saving the new document in mongodb.
                  const user = new AORModel({
                    full_name: full_name,
                    email: email,
                    phone: phone,
                    password: hash,
                    driving_license_number: driving_license_number,
                    role: [role],
                    refreshToken: "",
                  });
                  await user
                    .save()
                    .then(async (result) => {
                      if (result) {
                        // Deleting the temporary email.
                        await TempEmailOTPModel.deleteOne({ email: email });
                        return res.status(200).json({
                          status: "OK",
                          message:
                            "OTP successfully confirmed, Thanks for Registering with us.",
                        });
                      } else {
                        return res
                          .status(400)
                          .json({ message: "Error While Signup." });
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      return res.status(400).json(error.message);
                    });
                } else {
                  // If the user is already existed.
                  // Update the role and other fields.
                  await AORModel.findOneAndUpdate(
                    { email: email },
                    {
                      $set: {
                        full_name: full_name,
                        phone: phone,
                        password: hash,
                        driving_license_number: driving_license_number,
                        refreshToken: "",
                      },
                      $push: {
                        role: role,
                      },
                    }
                  )
                    .then(async (result) => {
                      if (result) {
                        // Deleting the temporary email.
                        await TempEmailOTPModel.deleteOne({ email: email });
                        return res.status(200).json({
                          status: "OK",
                          message:
                            "OTP successfully confirmed, Thanks for Registering with us.",
                        });
                      } else {
                        return res
                          .status(400)
                          .json({ message: "Error While Signup." });
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      return res.status(400).json(error.message);
                    });
                }
              }
            });
          } else {
            return res.status(400).json({
              status: "failed",
              message: "Sorry, the otp provided is not valid",
            });
          }
        }
      } else {
        res
          .status(400)
          .json({ message: "Error in Registration. Please Try Again." });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { VerifyEmail, VerifyOTP };
