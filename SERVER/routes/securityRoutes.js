// /server/routes/securityRoutes.js
const express = require('express');
const router = express.Router();

const {
    getSecuritySettings,
    createSecuritySetting,
    getSecuritySettingById,
    updateSecuritySetting,
    deleteSecuritySetting,
} = require('../controllers/securityController');



// Obtener todas las configuraciones de seguridad
router.get('/security', getSecuritySettings);

// Crear una nueva configuración de seguridad
router.post('/security', createSecuritySetting);

// Obtener una configuración de seguridad por ID
router.get('/security/:id', getSecuritySettingById);

// Actualizar una configuración de seguridad por ID
router.put('/security/:id', updateSecuritySetting);

// Eliminar una configuración de seguridad por ID
router.delete('/security/:id', deleteSecuritySetting);

module.exports = router;
