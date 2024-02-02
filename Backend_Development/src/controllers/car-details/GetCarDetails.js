const axios = require("axios");
const { CarDetailsModel } = require("../../model/CarDetailsModel");

// Function for updating the date array of objects
// These Finctions are only valid for converting the datas will be pushed into mongodb database
const ConvertDateOfPlates = (array) => {
  array.map((element, index) => {
    array[index] = {
      ...element,
      effective_date: element.effective_date * 1000,
    };
  });
  return array;
};

const ConvertDateOfLicences = (array) => {
  array.map((element, index) => {
    array[index] = {
      ...element,
      issue_datetime: element.issue_datetime * 1000,
      expiry_date: element.expiry_date * 1000,
    };
  });
  return array;
};

// This Endpoint will give the car details by entering the plate number.
const GetCarDetails = async (req, res) => {
  const { car_number } = req.query;
  try {
    const CarDetails = await CarDetailsModel.findOne({
      car_plate_number: car_number,
    });
    if (CarDetails) {
      return res.status(200).json({
        message: "Data fetched Successfully From DB!",
        data: CarDetails,
      });
    } else {
      const fetchCarDetails = await axios.get(
        `https://test.carjam.co.nz/api/car/?key=57964D5156FEBF9E0C401CE60678BFB2D5A1CB81&plate=${car_number}&f=json`
      );
      
      // Chacking the car_number is exists or not.
      if (fetchCarDetails.data.idh === undefined) {
         return res.status(403).json({message: "Invalid Plate number please enter again."})
      }
      const car_details = fetchCarDetails.data.idh;
      const vehicle_details = car_details.vehicle;
      const newDetails = {
        car_plate_number: car_details.plate,
        is_trade_plate: car_details.is_trade_plate,
        odometer_history: car_details.odometer_history,
        vehicle_system_id: vehicle_details.vehicle_system_id,
        year_of_manufacture: vehicle_details.year_of_manufacture,
        vehicle_maker: vehicle_details.make,
        vehicle_model: vehicle_details.model,
        vehicle_submodel: vehicle_details.submodel,
        body_style: vehicle_details.body_style,
        vehicle_type: vehicle_details.vehicle_type,
        vin_no: vehicle_details.vin,
        chassis_no: vehicle_details.chassis,
        engine_no: vehicle_details.engine_no,
        cc_rating: vehicle_details.cc_rating,
        power: vehicle_details.power,
        main_colour: vehicle_details.main_colour,
        second_colour: vehicle_details.second_colour,
        reported_stolen: vehicle_details.reported_stolen,
        country_of_origin: vehicle_details.country_of_origin,
        assembly_type: vehicle_details.assembly_type,
        reliable_odometer: vehicle_details.reliable_odometer,
        date_of_first_registration_in_nz:
          vehicle_details.date_of_first_registration_in_nz * 1000,
        cause_of_latest_registration:
          vehicle_details.cause_of_latest_registration,
        date_of_last_registration:
          vehicle_details.date_of_last_registration * 1000,
        imported_damaged: vehicle_details.imported_damaged,
        fuel_type: vehicle_details.fuel_type,
        vehicle_usages: vehicle_details.vehicle_usages,
        plate_type: vehicle_details.plate_type,
        plates: ConvertDateOfPlates(vehicle_details.plates),
        licences: ConvertDateOfLicences(vehicle_details.licences),
        continuous_licence: vehicle_details.continuous_licence,
        licence_type: vehicle_details.licence_type,
        licence_expiry_date: vehicle_details.licence_expiry_date * 1000,
        date_of_issue_for_latest_licence:
          vehicle_details.date_of_issue_for_latest_licence * 1000,
        time_of_issue_for_latest_licence:
          vehicle_details.time_of_issue_for_latest_licence,
        inconsistent_odometer: vehicle_details.inconsistent_odometer,
        latest_odometer_reading: vehicle_details.latest_odometer_reading,
        latest_daily_usage: vehicle_details.latest_daily_usage,
        reported_stolen_nzta: vehicle_details.reported_stolen_nzta,
      };

      const newCarDetails = new CarDetailsModel(newDetails);

      // saving the fetched car details
      await newCarDetails.save();
      const FetchCarDetails = await CarDetailsModel.findOne({
        car_plate_number: car_number,
      });
      res.status(200).json({
        message: "Data fetched Successfully From CarZAM!",
        data: FetchCarDetails,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { GetCarDetails };
