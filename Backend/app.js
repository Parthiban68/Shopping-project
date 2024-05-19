const express = require("express");
const db = require('./config/db');
const user = require('./routes/user')
const { connect } = require("mongoose");
require('dotenv').config()
const app = express()


db()
app.use("/user",user)

app.get('/',(req,res)=>{
    res.send("home page")
})

app.listen(process.env.port,()=>{
    console.log(`server running on port ${process.env.port}`) 
})