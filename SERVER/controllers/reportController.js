// /server/controllers/reporteController.js
const Report = require('../models/Report');

// Obtener todos los reportes
const getReports = async (req, res) => {
    try {
        const reports = await Report.find().populate('autor', 'nombre'); // Población del autor
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los reportes', error });
    }
};

// Crear un nuevo reporte
const createReport = async (req, res) => {
    try {
        const nuevoReport = new Report(req.body);
        await nuevoReport.save();
        res.status(201).json(nuevoReport);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el reporte', error });
    }
};

// Obtener un reporte por ID
const getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id).populate('autor', 'nombre');
        if (!report) {
            return res.status(404).json({ message: 'Reporte no encontrado' });
        }
        res.status(200).json(reporte);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el reporte', error });
    }
};

// Actualizar un reporte por ID
const updateReport = async (req, res) => {
    try {
        const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!report) {
            return res.status(404).json({ message: 'Reporte no encontrado' });
        }
        res.status(200).json(reporte);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el reporte', error });
    }
};

// Eliminar un reporte por ID
const deleteReport = async (req, res) => {
    try {
        const report = await Report.findByIdAndDelete(req.params.id);
        if (!report) {
            return res.status(404).json({ message: 'Reporte no encontrado' });
        }
        res.status(204).send(); // Sin contenido
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el reporte', error });
    }
};

// Exportar los controladores
module.exports = {
    getReports,
    createReport,
    getReportById,
    updateReport,
    deleteReport,
};
