const express = require('express')
const { mens, front, adminlist, productDetails, editItem, productdelete } = require('../controllers/ProductController')
const route = express.Router()

route.post('/mens', mens)
route.get('/prod', front)
route.get('/listitem',adminlist)
route.get(`/pd/:_id`,productDetails)
route.get(`/ed/:_id`,editItem)
route.delete('/delete',productdelete)
module.exports = route