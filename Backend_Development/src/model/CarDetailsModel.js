const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const CarDetailsSchema = new Schema({
  car_plate_number: {
    type: String,
    required: true,
    unique: true,
  },
  is_trade_plate: {
    type: Boolean,
  },
  odometer_history: {
    type: Array,
  },
  vehicle_system_id: {
    type: String,
  },
  year_of_manufacture: {
    type: String,
  },
  vehicle_maker: {
    type: String,
  },
  vehicle_model: {
    type: String,
  },
  vehicle_submodel: {
    type: String,
  },
  body_style: {
    type: String,
  },
  vehicle_type: {
    type: String,
  },
  vin_no: {
    type: String,
  },
  chassis_no: {
    type: String,
  },
  engine_no: {
    type: String,
  },
  cc_rating: {
    type: Number,
  },
  power: {
    type: Number,
  },
  main_colour: {
    type: String,
  },
  second_colour: {
    type: String,
  },
  reported_stolen: {
    type: String,
  },
  country_of_origin: {
    type: String,
  },
  assembly_type: {
    type: String,
  },
  reliable_odometer: {
    type: String,
  },
  date_of_first_registration_in_nz: {
    type: Date,
  },
  cause_of_latest_registration: {
    type: String,
  },
  date_of_last_registration: {
    type: Date,
  },
  imported_damaged: {
    type: String,
  },
  fuel_type: {
    type: String,
  },
  vehicle_usages: {
    type: Array,
  },
  plate_type: {
    type: String,
  },
  plates: [
    {
      plate_status: { type: String },
      plate_type: { type: String },
      registration_plate: { type: String },
      effective_date: { type: Date },
    },
  ],
  licences: [
    {
      number: { type: String },
      licence_type: { type: String },
      continuous_licence: { type: String },
      expiry_date: { type: Date },
      issue_datetime: { type: Date },
    },
  ],
  continuous_licence: { type: String },
  licence_type: { type: String },
  licence_expiry_date: { type: Date },
  date_of_issue_for_latest_licence: { type: Date },
  time_of_issue_for_latest_licence: { type: String },
  inconsistent_odometer: { type: String },
  latest_odometer_reading: { type: Number },
  latest_daily_usage: { type: Number },
  reported_stolen_nzta: { type: String },
});

const CarDetailsModel = mongoose.model("car_details_model", CarDetailsSchema);

module.exports = { CarDetailsModel };
