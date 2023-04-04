const express = require('express');
const router = express.Router();


//route for doctor functionality
router.use('/doctor',require("./doctor"));
//route for patient functionality
router.use('/patient',require("./patient"));
//route for report functionality
router.use('/reports',require("./report"));


module.exports = router;