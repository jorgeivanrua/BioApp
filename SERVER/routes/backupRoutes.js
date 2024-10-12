// BIOAPP/SERVER/routes/backup.js
const express = require('express');
const router = express.Router();
const BackupService = require('../services/backupService');

// Endpoint para crear una nueva copia de seguridad
router.post('/', async (req, res) => {
    try {
        const backupData = await BackupService.createBackup(req.body);
        res.status(201).json(backupData);
    } catch (error) {
        console.error('Error al crear la copia de seguridad:', error);
        res.status(500).json({ message: 'Error al crear la copia de seguridad.' });
    }
});

// Endpoint para listar copias de seguridad
router.get('/', async (req, res) => {
    try {
        const backups = await BackupService.getAllBackups();
        res.status(200).json(backups);
    } catch (error) {
        console.error('Error al obtener las copias de seguridad:', error);
        res.status(500).json({ message: 'Error al obtener las copias de seguridad.' });
    }
});

// Endpoint para restaurar una copia de seguridad
router.post('/restore/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const restoreData = await BackupService.restoreBackup(id);
        res.status(200).json(restoreData);
    } catch (error) {
        console.error('Error al restaurar la copia de seguridad:', error);
        res.status(500).json({ message: 'Error al restaurar la copia de seguridad.' });
    }
});

// Endpoint para eliminar una copia de seguridad
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await BackupService.deleteBackup(id);
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error al eliminar la copia de seguridad:', error);
        res.status(500).json({ message: 'Error al eliminar la copia de seguridad.' });
    }
});

module.exports = router;
