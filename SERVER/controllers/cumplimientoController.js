// BIOAPP/SERVER/controllers/cumplimientoController.js
const Cumplimiento = require('../models/Cumplimiento');

// Obtener todos los cumplimientos
const getCumplimientos = async (req, res) => {
    try {
        const cumplimientos = await Cumplimiento.find();
        res.json(cumplimientos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo cumplimiento
const createCumplimiento = async (req, res) => {
    const cumplimiento = new Cumplimiento(req.body);
    try {
        const savedCumplimiento = await cumplimiento.save();
        res.status(201).json(savedCumplimiento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener un cumplimiento por ID
const getCumplimientoById = async (req, res) => {
    try {
        const cumplimiento = await Cumplimiento.findById(req.params.id);
        if (!cumplimiento) {
            return res.status(404).json({ message: 'Cumplimiento no encontrado' });
        }
        res.json(cumplimiento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un cumplimiento por ID
const updateCumplimiento = async (req, res) => {
    try {
        const cumplimiento = await Cumplimiento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cumplimiento) {
            return res.status(404).json({ message: 'Cumplimiento no encontrado' });
        }
        res.json(cumplimiento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un cumplimiento por ID
const deleteCumplimiento = async (req, res) => {
    try {
        const cumplimiento = await Cumplimiento.findByIdAndDelete(req.params.id);
        if (!cumplimiento) {
            return res.status(404).json({ message: 'Cumplimiento no encontrado' });
        }
        res.json({ message: 'Cumplimiento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exportar las funciones
module.exports = {
    getCumplimientos,
    createCumplimiento,
    getCumplimientoById,
    updateCumplimiento,
    deleteCumplimiento,
};
