const student = require("../SCHEMA/schema");

const studentFunction  =async (req,res) => {
    const {CampusId,Name,Course,Placement}=req.body;

    const studentInfo=await student.create({
        CampusId,
        Name,
        Course,
        Placement
    })
    res.json(studentInfo)
   
}

const readStudent= async(req,res)=>{
    const getDatabyId = await student.find()
    res.send(getDatabyId);
}

const editStudent=async(req,res)=>{
    const {CampusId,Name,Course,Placement}=req.body;
    const _id=req.params.id;
    const edit=await student.findByIdAndUpdate(_id,{CampusId,Name,Course,Placement})
    res.json(edit);
}

const delStudent=async(req,res)=>{
    
    const _id=req.params.id;
    const del = await student.findByIdAndRemove({_id})
    // res.send (del);
    res.send("user removed ")
    
    

}


module.exports={studentFunction,readStudent,editStudent,delStudent};
