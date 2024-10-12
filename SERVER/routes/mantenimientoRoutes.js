const express = require('express');
const router = express.Router();
const {
    obtenerTareas,
    agregarTarea,
    actualizarTarea,
    eliminarTarea
} = require('../controllers/mantenimientoController'); // Asegúrate de que la ruta sea correcta

// Ruta para obtener todas las tareas de mantenimiento
router.get('/tareas', obtenerTareas); // Verifica que obtenerTareas esté definido

// Ruta para agregar una nueva tarea de mantenimiento
router.post('/tareas', agregarTarea); // Verifica que agregarTarea esté definido

// Ruta para actualizar una tarea de mantenimiento
router.put('/tareas/:id', actualizarTarea); // Verifica que actualizarTarea esté definido

// Ruta para eliminar una tarea de mantenimiento
router.delete('/tareas/:id', eliminarTarea); // Verifica que eliminarTarea esté definido

module.exports = router;
