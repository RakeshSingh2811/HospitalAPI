const express = require('express');
const router = express.Router();

//Doctor_api controller from controllers folder
const doctorController = require("../controllers/doctor_api");

//to Register a Doctor
router.post("/register",doctorController.register);

//to Logging in doctor and getting jwt token
router.post('/login',doctorController.login);

module.exports = router