const ProductModel = require('../model/ProductModel')

exports.mens = (req,res) =>{
    const product = ProductModel(req.body)
    product.save()
    // .then(res =>{console.log(res)})
    res.status(200).json({message:"data stored"})
    
}

exports.front =async (req,res)=>{
   let list = await ProductModel.find()
    // .then(res => console.log(res))
    // .catch(err=>console.log(err))
    res.status(200).json({message:"data recevied", list})
}