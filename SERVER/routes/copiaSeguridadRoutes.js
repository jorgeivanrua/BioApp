// /server/routes/copiaSeguridad.js
const express = require('express');
const router = express.Router();
const {
    getCopiasSeguridad,
    createCopiaSeguridad,
    restoreCopiaSeguridad,
    deleteCopiaSeguridad
} = require('../controllers/copiaSeguridadController');

// Rutas para la gestión de copias de seguridad
router.get('/', getCopiasSeguridad); // Obtener todas las copias de seguridad
router.post('/', createCopiaSeguridad); // Crear una nueva copia de seguridad
router.post('/restaurar/:id', restoreCopiaSeguridad); // Restaurar una copia de seguridad
router.delete('/:id', deleteCopiaSeguridad); // Eliminar una copia de seguridad

module.exports = router;
