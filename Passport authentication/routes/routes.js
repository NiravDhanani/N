const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
const passport = require('passport');




router.get('/', controller.login);
router.get('/index',passport.check, controller.index);
router.get('/register',passport.check, controller.register);
router.post('/registerUser', controller.registerUser);
router.post('/loginUser', passport.authenticate('local', {
    failureRedirect: '/'
}), controller.loginUser);

router.get('/logout',controller.logout)
module.exports = router;