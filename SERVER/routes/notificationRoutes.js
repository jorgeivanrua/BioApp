const express = require('express');
const router = express.Router();
const {
    getNotifications,
    getNotificationById,
    createNotification,
    updateNotification,
    deleteNotification,
} = require('../controllers/notificationController');

// Rutas de notificaciones
router.get('/', getNotifications); // Obtener todas las notificaciones
router.get('/:id', getNotificationById); // Obtener una notificación por ID
router.post('/', createNotification); // Crear una nueva notificación
router.put('/:id', updateNotification); // Actualizar una notificación por ID
router.delete('/:id', deleteNotification); // Eliminar una notificación por ID

module.exports = router;
