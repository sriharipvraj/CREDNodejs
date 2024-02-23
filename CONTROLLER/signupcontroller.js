const signup=require("../SCHEMA/connectionSchema");

const singupFunction = async(req,res)=>{
    const{FirstName,LastName,EmailAddress,Password}=req.body

    const signupinfo= await signup.create({
        FirstName,
        LastName,
        EmailAddress,
        Password
    })
    res.json(signupinfo)
}

const  logInFunction = async(req,res)=>{
    const {FirstName,LastName,EmailAddress,Password}=req.body

    const logIninfo=await signup.findOne({EmailAddress})
    // console.log(logIninfo);
    // console.log(logIninfo.Password);

    if(logIninfo){
        if(EmailAddress==logIninfo.EmailAddress&&Password==logIninfo.Password){
            res.json("log in successfull")
        }
        else{
            res.json("log in failed ")
        }

    }
    else{
        res.json("user not found ")
    }
}


module.exports={singupFunction,logInFunction};