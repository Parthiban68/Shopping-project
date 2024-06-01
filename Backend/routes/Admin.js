const express = require('express')
const route=express.Router()
const {adminsignup, adminactivate,adminsignin}=require('../controllers/AdminController')

route.post('/adminsignup',adminsignup)
route.get(`adminactivate/:activationCode`,adminactivate)
route.post('/adminsignin',adminsignin)

module.exports=route