const express = require('express');

const routes = express.Router();

const indexController  = require('../controlers/indexController')

routes.get('/',indexController.indexPage);
routes.get('/about',indexController.aboutPage);


module.exports = routes;