const contactModel= require('../models/contactModel')
const createContact= async function(req,res){
    try {
    const data= req.body
    const contact = await contactModel.create(data)
    return res.status(201).send({status:'successful',data:contact})
    } catch (error) {
        return res.status(500).send({status:false,data:"internal server error"})
    }
}
module.exports.createContact=createContact