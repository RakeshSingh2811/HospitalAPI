const mongoose = require('mongoose');
const reportSchema = mongoose.Schema({
    //patient reference
    patient :{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    //doctor reference
    doctor:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Doctor",  
    },
    //status enum to select 1 amongst the list 
    status:{
        type:String,
        required:true,
        enum:["Negative" , "Travelled-Quarantine" , "Symptoms-Quarantine","Positive-Admit"]
    }
},{timestamps:true});
const Report  = mongoose.model("Report",reportSchema);
module.exports = Report;