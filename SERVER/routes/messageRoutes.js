const express = require('express');
const router = express.Router();
const {
    getMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage,
} = require('../controllers/messageController');

// Rutas de mensajes
router.get('/', getMessages); // Obtener todos los mensajes
router.get('/:id', getMessageById); // Obtener un mensaje por ID
router.post('/', createMessage); // Crear un nuevo mensaje
router.put('/:id', updateMessage); // Actualizar un mensaje por ID
router.delete('/:id', deleteMessage); // Eliminar un mensaje por ID

module.exports = router;
