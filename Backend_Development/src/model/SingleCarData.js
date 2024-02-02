const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const CarSchema = new Schema({
  Make: {
    type: String,
  },
  Model: {
    type: String,
    unique: true,
  },
  Year: {
    type: String,
  },
  Drive: {
    type: String,
  },
  Cylinders: {
    type: String,
  },
  EngineDisplacement: {
    type: String,
  },
  FuelType: {
    type: String,
  },
  FuelType1: {
    type: String,
  },
  Transmission: {
    type: String,
  },
  VehicleSizeClass: {
    type: String,
  },
});

const CarModel = mongoose.model("all_cars", CarSchema);

module.exports = { CarModel };
