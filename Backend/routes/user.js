const express = require('express')
const route=express.Router()
const {signup} = require('../controllers/UserController')
const bodyparser = require('body-parser')

route.use(bodyparser.json())

route.post("/signup",signup)

module.exports=route