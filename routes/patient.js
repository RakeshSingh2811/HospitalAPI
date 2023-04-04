const express = require('express');
const router = express.Router();

//for authenication of Jwt Token
const passport= require('passport');

//patient_api controller from controllers folder
const PatienController =require("../controllers/patient_api");
//for registering the user if the token Matched
router.post('/register',passport.authenticate('jwt',{session:false}),PatienController.create);
//for creating a report if the token Matched
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),PatienController.createReport);
//get all reports of the particular user
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),PatienController.getUserReports);

module.exports=router;
