const fast2sms = require("fast-two-sms");
const { TempPhoneOTPModel } = require("../../../model/tempPhoneAndOtpModel");

const VerifyPhoneNumber = async (req, res) => {
  const { phone } = req.query;
  console.log(phone);
  if (phone === "" || phone === undefined) {
    return res.status(400).json({ message: "Please provide phone number." });
  }
  try {
    // sending OTP to sms
    const generatedOTP = Math.floor(100000 + Math.random() * 900000);
    // 2 minutes
    const expiryDate = Date.now() + 180000;
    console.log(`DATE: ${expiryDate}`);

    const options = {
      authorization: process.env.SMS_OTP_API_SECRET_KEY,
      message: `OTP Verification for Rentifai. Your OTP is ${generatedOTP}.`,
      numbers: [phone],
    };

    fast2sms.sendMessage(options).then((result) => {
      if (result) {
        // temporary database storage.
        // ...
        console.log(result);
        res
          .status(200)
          .json({
            success: "OK",
            message: "OTP sent to the phone please check.",
          });
      } else {
      res
        .status(400)
        .json({
          success: "failed",
          message: "Error while sending the api, Please try again.",
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Please provide valid phone number." });
  }
};

module.exports = { VerifyPhoneNumber };
