const ProductModel = require('../model/ProductModel')

exports.mens = (req, res) => {
    const product = ProductModel(req.body)
    product.save()
    res.status(200).json({ message: "data stored" })

}

exports.front = async (req, res) => {
    let list = await ProductModel.find()
    res.status(200).json({ message: "data recevied", list })
}

exports.adminlist = async (req, res) => {
    const listitems = await ProductModel.find()
    res.status(200).json({ mesage: "data received", listitems })
}

exports.productDetails = async (req, res) => {

    try {
        const _id = req.params

        const user = await ProductModel.find({_id})

        res.status(200).json({ message: "data feched", data: user })
        console.log(user);
    } catch (error) {
        console.log(error);

    }
}

exports.editItem = async (req, res) =>{
    try{
        const _id = req.params 
        const edit = await ProductModel.find({_id})
        res.status(200).json({message:"Data send", edit});
    }
    catch(error){
        console.log(error);
    }
}

exports.productdelete = async (req,res) =>{
    try{
        const {_id} = req.body
        console.log(req.body);
    await ProductModel.findByIdAndDelete({_id})
    res.status(200).json({ success:true, message:"Product deleted successfully"})
    }
    catch(error){
        res.status(400).json({message:"Product can't be deleted"})
    }
}
