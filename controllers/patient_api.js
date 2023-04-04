const Patient = require("../models/patients");
const Report = require("../models/reports");
const { ObjectId } = require('bson');


//registering the user
module.exports.create =async function(req,res){
    if(req.user)
    {
        let patient =await Patient.findOne({phone:req.body.phone});
        if(!patient)
        {
           patient = await  Patient.create(req.body); 
        }
        return res.status(200).json({
            patient : patient,
        })
    }
    else
    {
        return res.status(401).json({
            message:"You are not authorized for perfoming the Task"
        })
    }
}

//creating a report for the particular patient
module.exports.createReport = async function(req,res){
    let patient = new ObjectId(req.params.id);
    const doctor = req.user.id;
    const status = req.body.status;
    const report = await Report.create({patient:patient,doctor:doctor,status:status});
    if(report)
    {
        return res.status(200).json({
            message:"Report created Successfully",
        })
    }
    else{
        return res.status(500).json({
            message:"Problem in creating a Report"
        })
    }  
} 


//get all reports of the particular patient
module.exports.getUserReports = async function(req,res){
    let patient = new ObjectId(req.params.id);
    const reports = await Report.find({patient:patient});
    return res.status(200).json({reports:reports})
} 