// /server/routes/supportRoutes.js
const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

// Definición de las rutas
router.get('/tickets', supportController.getAllTickets);
router.post('/tickets', supportController.createTicket);
router.get('/tickets/:id', supportController.getTicketById);
router.put('/tickets/:id', supportController.updateTicket);
router.delete('/tickets/:id', supportController.deleteTicket);

// Exportar el router
module.exports = router;
