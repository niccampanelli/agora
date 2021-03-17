const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');
routes.get('/',(req,res)=>{res.send("ta funfando")})
routes.post('/cadastrar', userController.cadastrar);
routes.post('/login', userController.logar);
routes.post('/observador', userController.observador);

routes.get('/pegarInfo',userController.pegarDadosUser)

module.exports = routes;