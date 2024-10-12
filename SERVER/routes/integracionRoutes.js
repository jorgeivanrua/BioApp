// BIOAPP/SERVER/routes/integracion.js
const express = require('express');
const router = express.Router();
const integracionController = require('../controllers/integracionController');

// Obtener todas las integraciones
router.get('/', integracionController.getIntegraciones);

// Crear una nueva integración
router.post('/', integracionController.createIntegracion);

// Obtener una integración por ID
router.get('/:id', integracionController.getIntegracionById);

// Actualizar una integración por ID
router.put('/:id', integracionController.updateIntegracion);

// Eliminar una integración por ID
router.delete('/:id', integracionController.deleteIntegracion);

module.exports = router;
