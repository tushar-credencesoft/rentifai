// AOR Model : Admin, Owner, Renter Model
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const AORSchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  role: [String],
  landline: {
    type: String,
  },
  password: {
    type: String,
  },
  city: {
    type: String,
  },
  suburb: {
    type: String,
  },
  street: {
    type: String,
  },
  house_no: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  driving_license_number: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
});

const AORModel = mongoose.model("account_holders", AORSchema);

module.exports = { AORModel };
