const express = require("express");

// const {studentFunction,readStudent,editStudent,delStudent} = require("../CONTROLLER/controllers");
const {singupFunction,logInFunction} = require("../CONTROLLER/signupcontroller");


const router = express.Router();
//CRED 
// router.route("/create").post(studentFunction)
// router.route("/read").get(readStudent)
// router.route("/edit/:id").put(editStudent)
// router.route("/delete/:id").delete(delStudent)



// CONNECTION

router.route("/signup").post(singupFunction)
router.route("/login").post(logInFunction)








module.exports=router;