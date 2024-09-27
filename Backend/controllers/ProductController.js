const OutletModel = require('../model/OutletModel')
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

        const user = await ProductModel.find({ _id })

        res.status(200).json({ message: "data feched", data: user })
    } catch (error) {
        console.log(error);

    }
}

exports.editItem = async (req, res) => {
    try {
        const _id = req.params
        const edit = await ProductModel.find({ _id })
        res.status(200).json({ message: "Data send", edit });
    }
    catch (error) {
        console.log(error);
    }
}

exports.productdelete = async (req, res) => {
    try {
        const { _id } = req.body
        console.log(req.body);
        await ProductModel.findByIdAndDelete({ _id })
        res.status(200).json({ success: true, message: "Product deleted successfully" })
    }
    catch (error) {
        res.status(400).json({ message: "Product can't be deleted" })
    }
}

exports.outlet = async (req, res) => {
    try {
        const { countryname } = req.body

        let outlet = await OutletModel.findOne({ countryname })

        if (!outlet) {
            let image_file = `${req.file.filename}`
            outlet = new OutletModel({
                image: image_file,
                countryname: req.body.countryname,
                street: req.body.street,
                area: req.body.area,
                state: req.body.state
            })
            await outlet.save()
            console.log(outlet);
            return res.status(200).json({ message: "Outlet Stored"})
        }
        else {
            return res.status(400).json({ message: "outlet already stored" })
        }
    }
    catch (error) {
        return res.status(500).json({ message: error })
    }
}

//outlet fetch

exports.useroutlet = async (req, res) => {
    try {
        const listofoulet = await OutletModel.find()
        return res.status(200).json({ message: 'list received', listofoulet })
    }
    catch (error) {
        return res.status(400).json({ message: error })
    }
}