const express = require('express')
const routes  =  express.Router();

const Controller = require('../controller/indexController')

const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        let img = file.originalname;
        cb(null,img)
    }
})
const fileUpload = multer({storage : storage}).single('avatar');
                 

routes.get('/',Controller.viewPage)
routes.get('/form',Controller.formPage)
routes.post('/add',fileUpload,Controller.addData);
routes.get('/deleteData',Controller.deletedata);
routes.get('/editData',Controller.editdata);
routes.post('/update',fileUpload,Controller.update)



module.exports = routes;