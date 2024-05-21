const express = require("express");
const db = require('./config/db');
const user = require('./routes/user')
const product = require('./routes/Product')
require('dotenv').config()
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())

db()

//user signup and loign details
app.use("/user",user)

//product details
app.use("/product",product)


app.get('/',(req,res)=>{
    res.send("home page")
})

app.listen(process.env.port,()=>{
    console.log(`server running on port ${process.env.port}`) 
})