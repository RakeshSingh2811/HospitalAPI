const Doctor = require('../models/doctors');
const jwt = require('jsonwebtoken');
//registering Doctor
module.exports.register = async function(req,res){
   const doctor = await Doctor.findOne({userName:req.body.userName})
        if(!doctor){
           const doctor = await Doctor.create(req.body);
            return res.status(200).json({
            message:'User Created Succefully',
                doctor:doctor,
            })
        }
        else{
            return res.status(409).json({
                message:"User Already exists",
            })
        }
    }
//logging in the doctor
module.exports.login = async function(req,res){
    const doctor = await Doctor.findOne({userName:req.body.userName});
    if(!doctor || doctor.password != req.body.password){
        return res.status(422).json({
            message:"Invalid username or Password",
        });
    }
    return res.status(200).json({
        message:"User Logged in Successfully,Please save the token for future use",
        data:{
            token: jwt.sign(doctor.toJSON(),"SampleKey",{expiresIn:10*3600*1000})
        }
    })
}