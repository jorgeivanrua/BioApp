// BIOAPP/SERVER/controllers/copiasSeguridadController.js
const CopiaSeguridad = require('../models/CopiaSeguridad');

// Obtener todas las copias de seguridad
const getCopiasSeguridad = async (req, res) => {
    try {
        const copias = await CopiaSeguridad.find();
        res.json(copias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva copia de seguridad
const createCopiaSeguridad = async (req, res) => {
    const copia = new CopiaSeguridad(req.body);
    try {
        const savedCopia = await copia.save();
        res.status(201).json(savedCopia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener una copia de seguridad por ID
const getCopiaSeguridadById = async (req, res) => {
    try {
        const copia = await CopiaSeguridad.findById(req.params.id);
        if (!copia) return res.status(404).json({ message: 'Copia no encontrada' });
        res.json(copia);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una copia de seguridad por ID
const updateCopiaSeguridad = async (req, res) => {
    try {
        const copia = await CopiaSeguridad.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!copia) return res.status(404).json({ message: 'Copia no encontrada' });
        res.json(copia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una copia de seguridad por ID
const deleteCopiaSeguridad = async (req, res) => {
    try {
        const copia = await CopiaSeguridad.findByIdAndDelete(req.params.id);
        if (!copia) return res.status(404).json({ message: 'Copia no encontrada' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exportar las funciones
module.exports = {
    getCopiasSeguridad,
    createCopiaSeguridad,
    getCopiaSeguridadById,
    updateCopiaSeguridad,
    deleteCopiaSeguridad,
};
