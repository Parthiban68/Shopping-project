const ProductModel = require('../model/ProductModel')

exports.mens = (req,res) =>{
    const product = ProductModel(req.body)
    product.save()
    res.status(200).json({message:"data stored"})
    
}

exports.front =async (req,res)=>{
   let list = await ProductModel.find()
    res.status(200).json({message:"data recevied", list})
}

exports.adminlist = async (req,res) =>{
    const listitems = await ProductModel.find()
    res.status(200).json({mesage:"data received", listitems})
}
 