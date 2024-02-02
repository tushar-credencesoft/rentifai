const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const CarListSchema = new Schema({
  make: {
    type: String,
    unique: true,
  },
  models: [
    {
      model: {
        type: String,
        unique: true,
      },
      motive_power: {
        type: String,
      },
      basic_colour: {
        type: String,
      },
      body_type: {
        type: String,
      },
      transmission_type: {
        type: String,
      },
      cc_rating: {
        type: String,
      },
      chassis7: {
        type: String,
      },
      class: {
        type: String,
      },
      engine_number: {
        type: String,
      },
      gross_vehicle_mass: {
        type: String,
      },
      submodel: {
        type: String,
      },
      vehicle_years: [String],
    },
  ],
});

const CarListModel = mongoose.model(
  "car_models_of_a_specific_brands",
  CarListSchema
);

module.exports = { CarListModel };
