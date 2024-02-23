const mongoose = require("mongoose")


const signupDetails = mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    EmailAddress:{type:String},
    Password:{type:String}
})
 const singup = mongoose.model("signup",signupDetails);
 module.exports=singup;