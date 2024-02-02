const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const tempEmailOTPSchema = new Schema({
  email: {
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
const TempEmailOTPModel = mongoose.model(
  "temp_email_otp_stores",
  tempEmailOTPSchema
);

module.exports = { TempEmailOTPModel };
