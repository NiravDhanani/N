const express = require('express')
const routes = express.Router()
const multer = require('multer')

const userController = require('../controller/userController')

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads')
    },
    filename : (req,file,cb)=>{
        let filename = Date.now()+file.originalname;
        cb(null,filename);
    }
})
const uploadImage  = multer({storage : storage}).array('avtar',3);

routes.get('/',userController.view);
routes.get('/form',userController.form);
routes.post('/add',uploadImage, userController.add)
routes.get('/deleteData',uploadImage, userController.deleteData)
routes.get('/editData',userController.editData)
routes.post('/updateData',uploadImage, userController.updateData)
routes.get('/deleteImg',userController.deleteImg);


module.exports = routes;