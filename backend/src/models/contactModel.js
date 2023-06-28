const mongoose= require('mongoose')
const contactSchema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"Please enter your name"]
    },
    email:{
        type:String,
        trim:true,
        required:[true,"Please enter your email"]
    },
    message:{
        type:String,
        trim:true,
        required:[true,"Please enter your message"]
    }
},{timestamps:true})
module.exports=mongoose.model('Contact',contactSchema)