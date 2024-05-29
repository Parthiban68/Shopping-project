const express = require('express')
const { mens, front, adminlist, productDetails } = require('../controllers/ProductController')
const route = express.Router()

route.post('/mens', mens)
route.get('/prod', front)
route.get('/listitem',adminlist)
route.get(`/pd/:_id`,productDetails)


module.exports = route