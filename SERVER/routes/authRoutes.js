const express = require('express');
const { registrarUsuario, autenticarUsuario } = require('../controllers/authController');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registrarUsuario);

// Ruta para autenticar un usuario
router.post('/login', autenticarUsuario);

module.exports = router;
