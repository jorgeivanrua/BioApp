// BIOAPP/SERVER/controllers/integracionController.js
const Integracion = require('../models/Integracion');

// Obtener todas las integraciones
const getIntegraciones = async (req, res) => {
    try {
        const integraciones = await Integracion.find();
        res.json(integraciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva integración
const createIntegracion = async (req, res) => {
    const integracion = new Integracion(req.body);
    try {
        const savedIntegracion = await integracion.save();
        res.status(201).json(savedIntegracion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener una integración por ID
const getIntegracionById = async (req, res) => {
    try {
        const integracion = await Integracion.findById(req.params.id);
        if (!integracion) {
            return res.status(404).json({ message: 'Integración no encontrada' });
        }
        res.json(integracion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una integración por ID
const updateIntegracion = async (req, res) => {
    try {
        const integracion = await Integracion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!integracion) {
            return res.status(404).json({ message: 'Integración no encontrada' });
        }
        res.json(integracion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una integración por ID
const deleteIntegracion = async (req, res) => {
    try {
        const integracion = await Integracion.findByIdAndDelete(req.params.id);
        if (!integracion) {
            return res.status(404).json({ message: 'Integración no encontrada' });
        }
        res.json({ message: 'Integración eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exportar las funciones
module.exports = {
    getIntegraciones,
    createIntegracion,
    getIntegracionById,
    updateIntegracion,
    deleteIntegracion,
};
