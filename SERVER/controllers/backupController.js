// /server/controllers/backupController.js
const Backup = require('../models/Backup');

// Obtener todas las copias de seguridad
const getBackups = async (req, res) => {
    try {
        const backups = await Backup.find().populate('responsable', 'nombre');
        res.status(200).json(backups);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las copias de seguridad', error });
    }
};

// Crear una nueva copia de seguridad
const createBackup = async (req, res) => {
    try {
        const nuevaCopia = new Backup(req.body);
        await nuevaCopia.save();
        res.status(201).json(nuevaCopia);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la copia de seguridad', error });
    }
};

// Obtener una copia de seguridad por ID
const getBackupById = async (req, res) => {
    try {
        const backup = await Backup.findById(req.params.id).populate('responsable', 'nombre');
        if (!backup) {
            return res.status(404).json({ message: 'Copia de seguridad no encontrada' });
        }
        res.status(200).json(backup);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la copia de seguridad', error });
    }
};

// Actualizar una copia de seguridad por ID
const updateBackup = async (req, res) => {
    try {
        const backup = await Backup.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!backup) {
            return res.status(404).json({ message: 'Copia de seguridad no encontrada' });
        }
        res.status(200).json(backup);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la copia de seguridad', error });
    }
};

// Eliminar una copia de seguridad por ID
const deleteBackup = async (req, res) => {
    try {
        const backup = await Backup.findByIdAndDelete(req.params.id);
        if (!backup) {
            return res.status(404).json({ message: 'Copia de seguridad no encontrada' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la copia de seguridad', error });
    }
};

module.exports = {
    getBackups,
    createBackup,
    getBackupById,
    updateBackup,
    deleteBackup,
};
