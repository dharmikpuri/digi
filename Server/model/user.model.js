const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    avatar:{type:String,require:true},
    name: {type:String,require:true},
email : {type:String,require:true},
password : {type:String,require:true},
age : {type:Number,require:true},
gender:{type:String,require:true}
},{versonKey:false})


const UserModel = mongoose.model("users",userSchema)

module.exports = {UserModel}