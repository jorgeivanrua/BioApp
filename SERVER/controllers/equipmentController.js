// /server/controllers/equipmentController.js
const Equipment = require('../models/Equipment');

// Obtener todos los equipos
exports.getAllEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find();
    res.json(equipments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los equipos' });
  }
};

// Agregar un nuevo equipo
exports.addEquipment = async (req, res) => {
  try {
    const { name, type } = req.body;

    // Validar datos
    if (!name || !type) {
      return res.status(400).json({ message: 'Nombre y tipo son requeridos' });
    }

    const newEquipment = new Equipment({ name, type });
    const savedEquipment = await newEquipment.save();
    res.status(201).json(savedEquipment);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error al crear el equipo' });
  }
};

// Obtener un equipo por ID
exports.getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) {
      return res.status(404).json({ message: 'Equipo no encontrado' });
    }
    res.json(equipment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener el equipo' });
  }
};

// Actualizar un equipo
exports.updateEquipment = async (req, res) => {
  try {
    const { name, type } = req.body;

    // Validar datos
    if (!name || !type) {
      return res.status(400).json({ message: 'Nombre y tipo son requeridos' });
    }

    const updatedEquipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      { name, type },
      { new: true, runValidators: true } // Ejecutar validadores durante la actualización
    );

    if (!updatedEquipment) {
      return res.status(404).json({ message: 'Equipo no encontrado' });
    }
    
    res.json(updatedEquipment);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error al actualizar el equipo' });
  }
};

// Eliminar un equipo
exports.deleteEquipment = async (req, res) => {
  try {
    const deletedEquipment = await Equipment.findByIdAndDelete(req.params.id);
    
    if (!deletedEquipment) {
      return res.status(404).json({ message: 'Equipo no encontrado' });
    }
    
    res.json({ message: 'Equipo eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al eliminar el equipo' });
  }
};