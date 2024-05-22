const mongoose = require('mongoose')

const AdminShcema = new mongoose.Schema({
    adminname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    activationCode:{
        type:String,
        require:true,
        default:null
    },
    isActivated:{
        type:Boolean,
        require:true,
        default:false
    }
})

const AdminModel = mongoose.model('Admins',AdminShcema)

module.exports=AdminModel