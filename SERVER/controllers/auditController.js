// /server/controllers/auditController.js
const Audit = require('../models/Audit');

// Obtener todas las auditorías
const getAudits = async (req, res) => {
    try {
        const audits = await Audit.find();
        res.status(200).json(audits);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener auditorías', error });
    }
};

// Crear una nueva auditoría
const createAudit = async (req, res) => {
    try {
        const newAudit = new Audit(req.body);
        await newAudit.save();
        res.status(201).json(newAudit);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear auditoría', error });
    }
};

// Obtener una auditoría por ID
const getAuditById = async (req, res) => {
    try {
        const audit = await Audit.findById(req.params.id);
        if (!audit) {
            return res.status(404).json({ message: 'Auditoría no encontrada' });
        }
        res.status(200).json(audit);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener auditoría', error });
    }
};

// Actualizar una auditoría por ID
const updateAudit = async (req, res) => {
    try {
        const audit = await Audit.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!audit) {
            return res.status(404).json({ message: 'Auditoría no encontrada' });
        }
        res.status(200).json(audit);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar auditoría', error });
    }
};

// Eliminar una auditoría por ID
const deleteAudit = async (req, res) => {
    try {
        const audit = await Audit.findByIdAndDelete(req.params.id);
        if (!audit) {
            return res.status(404).json({ message: 'Auditoría no encontrada' });
        }
        res.status(204).send(); // Sin contenido
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar auditoría', error });
    }
};

// Exportar los controladores
module.exports = {
    getAudits,
    createAudit,
    getAuditById,
    updateAudit,
    deleteAudit,
};
