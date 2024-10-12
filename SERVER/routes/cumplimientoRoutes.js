// /server/routes/cumplimiento.js
const express = require('express');
const router = express.Router();
const {
    getCumplimientos,
    createCumplimiento,
    getCumplimientoById,
    updateCumplimiento,
    deleteCumplimiento,
} = require('../controllers/cumplimientoController');

// Rutas de cumplimiento
router.get('/', getCumplimientos); // Obtener todos los registros de cumplimiento
router.post('/', createCumplimiento); // Crear un nuevo registro de cumplimiento
router.get('/:id', getCumplimientoById); // Obtener un registro por ID
router.put('/:id', updateCumplimiento); // Actualizar un registro por ID
router.delete('/:id', deleteCumplimiento); // Eliminar un registro por ID

module.exports = router;
