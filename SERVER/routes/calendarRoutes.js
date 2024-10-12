// SERVER/routes/calendarRoutes.js

const express = require('express');
const router = express.Router();

// Simulación de una base de datos en memoria para eventos (puedes reemplazarlo con MongoDB)
let events = [];

// Obtener todos los eventos
router.get('/', (req, res) => {
    res.json(events);
});

// Agregar un nuevo evento
router.post('/add', (req, res) => {
    const newEvent = req.body; // Asegúrate de validar y procesar los datos adecuadamente
    events.push(newEvent);
    res.status(201).json({ message: 'Evento agregado', event: newEvent });
});

module.exports = router;