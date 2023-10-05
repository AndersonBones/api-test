const controllers = require('../controllers/home');

const express = require('express')
const routes = express.Router()

routes.get('/', controllers.home)


module.exports = routes;
