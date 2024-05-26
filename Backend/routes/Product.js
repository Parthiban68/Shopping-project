const express = require('express')
const { mens, front, adminlist } = require('../controllers/ProductController')
const route = express.Router()

route.post('/mens', mens)
route.get('/prod', front)
route.get('/listitem',adminlist)

module.exports = route