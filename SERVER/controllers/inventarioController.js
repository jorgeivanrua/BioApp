// /server/controllers/inventarioController.js
const Inventario = require('../models/Inventario');

// Obtener todos los inventarios
const getInventarios = async (req, res) => {
    try {
        const inventarios = await Inventario.find();
        res.status(200).json(inventarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener inventarios', error });
    }
};

// Crear un nuevo inventario
const createInventario = async (req, res) => {
    try {
        const newInventario = new Inventario(req.body);
        await newInventario.save();
        res.status(201).json(newInventario);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear inventario', error });
    }
};

// Obtener un inventario por ID
const getInventarioById = async (req, res) => {
    try {
        const inventario = await Inventario.findById(req.params.id);
        if (!inventario) {
            return res.status(404).json({ message: 'Inventario no encontrado' });
        }
        res.status(200).json(inventario);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener inventario', error });
    }
};

// Actualizar un inventario por ID
const updateInventario = async (req, res) => {
    try {
        const inventario = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!inventario) {
            return res.status(404).json({ message: 'Inventario no encontrado' });
        }
        res.status(200).json(inventario);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar inventario', error });
    }
};

// Eliminar un inventario por ID
const deleteInventario = async (req, res) => {
    try {
        const inventario = await Inventario.findByIdAndDelete(req.params.id);
        if (!inventario) {
            return res.status(404).json({ message: 'Inventario no encontrado' });
        }
        res.status(204).send(); // Sin contenido
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar inventario', error });
    }
};

// Exportar los controladores
module.exports = {
    getInventarios,
    createInventario,
    getInventarioById,
    updateInventario,
    deleteInventario,
};
