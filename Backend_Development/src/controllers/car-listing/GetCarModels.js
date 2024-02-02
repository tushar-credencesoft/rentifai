const { CarListModel } = require("../../model/CarListingModel");

// Controller for getting the brand name by entering the brand name.
// By Entering the initial letters of the brand name also we will able to get the brand name.
const GetCarByBrandName = async (req, res) => {
  const brand = req.query.brand?.toUpperCase();
  if (brand === "" || brand === undefined) {
    return res.json({
      message: "Enter the Model Name.",
      data: [],
    });
  }

  // Regex for searching the car brands by initial letters.
  const regex = new RegExp(`^${brand}`, "i");
  const searchQuery = { make: { $regex: regex } };

  try {
    await CarListModel.find(searchQuery)
      .select("-_id make")
      .then((result) => {
        if (result) {
          if (result.length === 0) {
            return res.json({
              success: "failed",
              message: "No Car Found.",
              data: result,
            });
          }
          return res.status(200).json({
            success: "OK",
            message: "Car found successfully.",
            data: result,
          });
        } else {
          return res.json({
            success: "failed",
            message: "Car Brand not found, Please Manually Enter It.",
          });
        }
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// Controller for getting the models by entering the brand name and model name.
const GetCarByModelName = async (req, res) => {
  const brand = req.query.brand?.toUpperCase();
  const model = req.query.model?.toUpperCase();
  try {
    await CarListModel.findOne({ make: brand })
      .select("models.model models.submodel models.vehicle_years")
      .then((result) => {
        if (result) {
          const SearchedModels = [];
          const ModelsFromDB = result.models;
          // This Code can be updated in future for more optimization
          ModelsFromDB.map((modelFromDB) => {
            if (modelFromDB.model.startsWith(model)) {
              SearchedModels.push(modelFromDB);
            }
          });
          if (SearchedModels.length !== 0) {
            res.status(200).json({
              success: "OK",
              message: "Model Found Successfully.",
              data: SearchedModels,
            });
          } else {
            res.json({
              success: "OK",
              message:
                "This Model of the brand is not found, please manually enter it.",
              data: SearchedModels,
            });
          }
        } else {
          return res.json({
            success: "failed",
            data: [],
            message: "Car Model not found, Please Manually Enter It.",
          });
        }
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { GetCarByBrandName, GetCarByModelName };
