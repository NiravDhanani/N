const express = require('express')

const route = express.Router()
const passport = require('passport');

const loginController = require('../controller/LoginController');
const UserController = require('../controller/UserController');

const multer = require('multer')

const storage  = multer.diskStorage({
    destination : (req,file,cb)=> {
        cb(null,'uploads')
    },
    filename : (req,file,cb)=>{
        let fname = Date.now()+file.originalname;
        cb(null,fname);
    }
})

const profilePic = multer({storage : storage}).single('image');


// login controllers ----------------------------------------------------------------
route.get('/',loginController.loginPage);
route.post('/addUser',profilePic,loginController.addUser);
route.post('/loginUser',passport.authenticate('local',{ failureRedirect : '/'}),loginController.loginUser);
route.get('/logout',loginController.logout);




//UserController ===============================================

route.get('/home',UserController.homePage)

module.exports = route