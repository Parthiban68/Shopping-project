const express = require("express");
const db = require('./config/db');
const user = require('./routes/user')
const admin = require('./routes/Admin')
const product = require('./routes/Product')
require('dotenv').config()
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')

const corsOption = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 200,
}
app.use(cors(corsOption));
app.use(bodyparser.json())


db()

//user signup and loign details
app.use("/user",user)

//product details
app.use("/product",product)

//admin login & dashboard
app.use('/admin',admin)

app.use("/images", express.static("uploads"));

// test url
app.get('/',(req,res)=>{
    res.send("home page")
})

app.listen(process.env.port,()=>{
    console.log(`server running on port ${process.env.port}`) 
})