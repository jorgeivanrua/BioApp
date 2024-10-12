// /server/routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const {
    getReports,
    createReport,
    getReportById,
    updateReport,
    deleteReport,
} = require('../controllers/reportController');

// Rutas de reportes
router.get('/', getReports); // Obtener todos los reportes
router.post('/', createReport); // Crear un nuevo reporte
router.get('/:id', getReportById); // Obtener un reporte por ID
router.put('/:id', updateReport); // Actualizar un reporte por ID
router.delete('/:id', deleteReport); // Eliminar un reporte por ID

module.exports = router;
