const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const tempPhoneOTPSchema = new Schema({
  phone: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  otpExpiryDate: {
    type: String,
    required: true,
  },
});

// plurel collection name
const TempPhoneOTPModel = mongoose.model(
  "temp_phone_otp_stores",
  tempPhoneOTPSchema
);

module.exports = { TempPhoneOTPModel };
