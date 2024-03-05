const express = require('express')
const route = express.Router();


const categoryController = require('../controller/categoryController')

route.get('/',categoryController.index)
route.get('/form',categoryController.categoryaddPage)
route.post('/addcategory',categoryController.addcategory)
route.get('/categoryView',categoryController.categoryView)
route.delete('/categoryDelete',categoryController.categoryDelete)
route.put('/categoryUpdate',categoryController.categoryUpdate)
route.get('/categoryShow',categoryController.categoryShow)


module.exports = route