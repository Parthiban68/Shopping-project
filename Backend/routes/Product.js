const express = require('express')
const { mens, front, adminlist, productDetails, editItem, productdelete, outlet, useroutlet } = require('../controllers/ProductController')
const route = express.Router()
const multer  = require('multer')
const path = require('path')

route.post('/mens', mens)
route.get('/prod', front)
route.get('/listitem',adminlist)
route.get(`/pd/:_id`,productDetails)
route.get(`/ed/:_id`,editItem)
route.delete('/delete',productdelete)

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, 'Public/Images')
    }, 
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage:storage})

route.post('/addoutlet', upload.single("image"), outlet)
route.get('/outlet',useroutlet)

module.exports = route