const express = require('express')
const route=express.Router()
const {adminsigup, adminactivate,adminsignin}=require('../controllers/AdminController')

route.post('/adminsigup',adminsigup)
route.get(`adminactivate/:activationCode`,adminactivate)
route.post('/adminsignin',adminsignin)

module.exports=route