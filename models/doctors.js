const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    //username of doctor
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    //password to login
    password:{
        type:String,
        required:true,
    },
    //doctor name
    name:{
        type:String,
        required:true,
    }
},{timestamps:true});
const Doctor = mongoose.model('Doctor',doctorSchema);
module.exports = Doctor ;