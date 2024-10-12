// /server/routes/usuarios.js
const express = require('express');
const router = express.Router();
const {
    getUsuarios,         // Obtener todos los usuarios
    createUsuario,       // Crear un nuevo usuario
    getUsuarioById,      // Obtener un usuario por ID
    updateUsuario,       // Actualizar un usuario por ID
    deleteUsuario,       // Eliminar un usuario por ID
} = require('../controllers/usuarioController');

// Rutas de usuarios
router.get('/', getUsuarios);                      // Obtener todos los usuarios
router.post('/', createUsuario);                    // Crear un nuevo usuario
router.get('/:id', getUsuarioById);                 // Obtener un usuario por ID
router.put('/:id', updateUsuario);                  // Actualizar un usuario por ID
router.delete('/:id', deleteUsuario);               // Eliminar un usuario por ID

// Exportar el router
module.exports = router;
