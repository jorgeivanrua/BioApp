// server/routes/auditRoutes.js
const express = require('express');
const router = express.Router();
const auditController = require('../controllers/auditController');

// Obtener todas las auditorías
router.get('/', auditController.getAudits);

// Crear una nueva auditoría
router.post('/', auditController.createAudit);

// Obtener auditoría por ID
router.get('/:id', auditController.getAuditById);

// Actualizar auditoría
router.put('/:id', auditController.updateAudit);

// Eliminar auditoría
router.delete('/:id', auditController.deleteAudit);

module.exports = router;
