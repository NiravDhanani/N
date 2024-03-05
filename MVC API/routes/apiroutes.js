const express = require('express')
const routes = express.Router();

const apicallingcontroller = require('../controllers/apiController')
routes.get('/',apicallingcontroller.apicalling);
routes.get('/themesdata',apicallingcontroller.themesdata);


module.exports = routes