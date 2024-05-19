const UserModel = require('../model/UserModel');
const {v4:uuidv4} = require('uuid')
const bcrypt = require('bcryptjs')


exports.signup = async(req,res)=>{
    
    const {username,email,password} = req.body

    let user = await UserModel.findOne({email})

    if(user){
        return res.status(400).json({message:"mail id already registered"})
    }

    const activationCode=uuidv4()

    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash("password",salt)

    user = UserModel({
        username,
        email,
        password:hashpassword,
        activationCode
    })

    await user.save()

    res.send("posting page")
}