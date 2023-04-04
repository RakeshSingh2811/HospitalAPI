//include Reports database from Models Folder
const Reports = require('../models/reports');

//get Reports based upon the status
module.exports.getReports = async function(req,res){
    state=req.params.status;
    reports = await Reports.find({status:state});
    return res.status(200).json({reports:reports}); 
}