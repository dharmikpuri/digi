const mongoose = require("mongoose")
const { UserModel } = require("../model/user.model")
async function userValidator(req,res,next){
let data= await UserModel.find({$or: [{"name" : req.body.name}, {"email" : req.body.email}]})
    if(data.length>0){
        res.send({
            message:"User already exist"
        })
    }else{
        next()
    }  
}
module.exports={userValidator}