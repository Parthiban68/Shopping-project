const express = require('express')
const { mens, front } = require('../controllers/ProductController')
const route = express.Router()

route.post('/mens', mens)
route.get('/prod', front)

module.exports = route