// /server/controllers/securityController.js
const Security = require('../models/Security');

// Obtener las configuraciones de seguridad
const getSecuritySettings = async (req, res) => {
    try {
        const settings = await Security.find().populate('userId', 'username email');
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener configuraciones de seguridad', error });
    }
};

// Crear una nueva configuración de seguridad
const createSecuritySetting = async (req, res) => {
    try {
        const newSetting = new Security(req.body);
        await newSetting.save();
        res.status(201).json(newSetting);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear configuración de seguridad', error });
    }
};

// Obtener una configuración de seguridad por ID
const getSecuritySettingById = async (req, res) => {
    try {
        const setting = await Security.findById(req.params.id).populate('userId', 'username email');
        if (!setting) {
            return res.status(404).json({ message: 'Configuración de seguridad no encontrada' });
        }
        res.status(200).json(setting);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener configuración de seguridad', error });
    }
};

// Actualizar una configuración de seguridad por ID
const updateSecuritySetting = async (req, res) => {
    try {
        const setting = await Security.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!setting) {
            return res.status(404).json({ message: 'Configuración de seguridad no encontrada' });
        }
        res.status(200).json(setting);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar configuración de seguridad', error });
    }
};

// Eliminar una configuración de seguridad por ID
const deleteSecuritySetting = async (req, res) => {
    try {
        const setting = await Security.findByIdAndDelete(req.params.id);
        if (!setting) {
            return res.status(404).json({ message: 'Configuración de seguridad no encontrada' });
        }
        res.status(204).send(); // Sin contenido
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar configuración de seguridad', error });
    }
};

// Exportar los controladores
module.exports = {
    getSecuritySettings,
    createSecuritySetting,
    getSecuritySettingById,
    updateSecuritySetting,
    deleteSecuritySetting,
};
