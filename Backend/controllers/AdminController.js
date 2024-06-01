const AdminModel = require('../model/AdminModel');
const {v4:uuidv4} = require('uuid')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')


exports.adminsignup = async(req,res)=>{
    
    const {adminname,email,password} = req.body

    let admin = await AdminModel.findOne({email})

    if(admin){
        return res.status(400).json({message:"mail id already registered"})
    }

    const activationCode=uuidv4()

    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash("password",salt)

    admin = AdminModel({
        adminname,
        email,
        password:hashpassword,
        activationCode
    })

    await admin.save()

    // mail 

    const transport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        auth:{
            user:process.env.email_id,
            pass:process.env.email_password
        }
    })

    const activationlink = `http://localhost:${process.env.port}/admin/adminactivate/${activationCode}`

    const mailoption ={
        from:process.env.email_id,
        to:email,
        subject:"Verification mail",
        text:`Click the below link ${activationlink}`
    }

    transport.sendMail(mailoption,(err,info)=>{
        if(err){
            console.log(err);
            return res.status(500).json({message:'cannot send the link activation link'}) 
        }
        else{
            return res.status(200).json({message:'Activation link send to your email please verify to proceed login'})
        }
    })
    
}

exports.adminactivate= async(req,res)=>{
    const {activationCode}=req.params
    console.log(activationCode)
    let admin = await AdminModel.findOne({activationCode})
    if(!admin){
       return res.status(500).json({message:"cannot activate the account"})
    }

    user.isActivated=true
    user.save()
    res.status(200).json({message:"Account activation successfull"})
}

exports.adminsignin = async(req,res)=>{
    const { email, password } = req.body

    let admin = await AdminModel.findOne({email})

    if(!admin){
        return res.status(400).json({message:"Email not found"})
    }

    const isMatching = await bcrypt.compare("password",admin.password)


    if(!isMatching){
        return res.status(400).json({message:"Incorrect password"})
    }

    if(!admin.isActivated){
        return res.status(400).json({message:"Account not yet activated.Please activate before login"})
    }

    return res.status(200).json({message:"Login Successfull", user})

}