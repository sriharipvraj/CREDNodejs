const mongoose = require("mongoose")

const studentDetails = mongoose.Schema({

    CampusId:{type:Number},
    Name:{type:String},
    Course:{type:String},
    Placement:{type:Boolean}
})

const student = mongoose.model("student",studentDetails);
module.exports=student; 