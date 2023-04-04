const express = require('express');

//reports_api controller in controller folder
const reportController = require('../controllers/reports_api');


//for validating Jwt bearer token
const passport = require('passport');

const router = express.Router();
//to filter the reports based on status
router.get("/:status",passport.authenticate('jwt',{session:false}), reportController.getReports);

module.exports=router;