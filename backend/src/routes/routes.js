const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');

routes.post('/cadastrar', userController.cadastrar);
routes.post('/login', userController.logar);
routes.post('/observador', userController.observador);

module.exports = routes;