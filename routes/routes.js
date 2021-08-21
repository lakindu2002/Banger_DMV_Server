const express = require("express");
const router = express.Router();

//the controller methods executed for each request mapping.
const licenseValidationController = require("../controllers/LicenseValidationController");

//create the get request for the API in-order to fetch csv
router.get("/csv/get", licenseValidationController.fetchCsv);

module.exports = router; //export the cofigured router.