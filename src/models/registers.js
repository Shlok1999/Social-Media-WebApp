const mongoose=require('mongoose')

const userRegisteredSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }


})
//Creating a collection

const Register=new mongoose.model("Register", userRegisteredSchema);
module.exports=Register;