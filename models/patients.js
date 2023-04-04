const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    //Unique Phone number
    phone:{
        type:Number,
        required:true,
        Unique:true,
    },
    //patient name
    name:{
        type:String,
        required:true,
    }
},{timestamps:true});
const Patient = mongoose.model('Patient',patientSchema);
module.exports = Patient;