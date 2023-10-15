const WorksModel = require("../models/WorksModel");


exports.createWork=async (req,res)=>{
    try{
        let reqBody=req.body
        reqBody.email=req.headers['email'];
        let result= await WorksModel.create(reqBody)
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}


exports.deleteWork=async (req,res)=>{
    try {
        let id= req.params.id;
        let Query={_id:id};
        let result= await WorksModel.deleteOne(Query)
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}


exports.updateWorkStatus=async (req,res)=>{
    try{
        let id= req.params.id;
        let status= req.params.status;
        let Query={_id:id};
        let reqBody={status:status}

        let result= await WorksModel.updateOne(Query,reqBody)

        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}


exports.listWorkByStatus=async (req,res)=>{
    try {
        let status= req.params.status;
        let email=req.headers['email'];
        let result= await WorksModel.find({email:email,status:status});
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}
