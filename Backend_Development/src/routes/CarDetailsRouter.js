const router = require("express").Router();
const { GetCarDetails } = require("../controllers/car-details/GetCarDetails");
const { GetCarByBrandName, GetCarByModelName } = require("../controllers/car-listing/GetCarModels");

router
  .get("/car-details", GetCarDetails)
  .get("/car-brand", GetCarByBrandName)
  .get("/car-model", GetCarByModelName);

module.exports = router;
