const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    shoemodel:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    mrp:{
        type:Number,
        require:true
    },
    indsize:{
        type:Number,
        require:true
    },
    uksize:{
        type:Number,
        requirer:true
    },
    description:{
        type:String,
        require:true
    },
    color:{
        type:String,
    },
    prdinfo:{
        type:String,
        require:true
    },
    delret:{
        type:String,
        require:true
    },
    poster:{
        type:String,
        require:true
    }
})

const ProductModel = mongoose.model("product",ProductSchema)

module.exports = ProductModel