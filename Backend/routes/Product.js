const express = require('express')
const {mens} = require('../controllers/ProductController')
const route = express.Router()

route.post('/mens',mens)
module.exports = route