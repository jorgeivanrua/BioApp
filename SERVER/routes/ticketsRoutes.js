// /server/routes/ticketsRoutes.js
const express = require('express');
const router = express.Router();
const {
    getTickets,
    createTicket,
    getTicketById,
    updateTicket,
    deleteTicket,
} = require('../controllers/ticketsController');

// Rutas para los tickets de soporte
router.get('/', getTickets); // Obtener todos los tickets
router.post('/', createTicket); // Crear un nuevo ticket
router.get('/:id', getTicketById); // Obtener un ticket por ID
router.put('/:id', updateTicket); // Actualizar un ticket por ID
router.delete('/:id', deleteTicket); // Eliminar un ticket por ID

module.exports = router;
