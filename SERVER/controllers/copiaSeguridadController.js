// /server/controllers/copiaSeguridadController.js
const CopiaSeguridad = require('../models/CopiaSeguridad');
const fs = require('fs');
const path = require('path');

// Obtener todas las copias de seguridad
const getCopiasSeguridad = async (req, res) => {
    try {
        const copias = await CopiaSeguridad.find().populate('usuario', 'nombre');
        res.status(200).json(copias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las copias de seguridad', error });
    }
};

// Crear una nueva copia de seguridad
const createCopiaSeguridad = async (req, res) => {
    try {
        // Simulación de creación de copia de seguridad (en la práctica, deberías integrar un proceso de backup)
        const nuevoArchivo = `backup-${Date.now()}.zip`;
        const ruta = path.join(__dirname, '..', 'backups', nuevoArchivo);

        // Guardar copia de seguridad en el sistema
        const nuevaCopia = new CopiaSeguridad({
            nombreArchivo: nuevoArchivo,
            tamano: 1024, // Simulación del tamaño del archivo
            rutaArchivo: ruta,
            usuario: req.body.usuarioId,
        });
        await nuevaCopia.save();

        // Simular creación de archivo
        fs.writeFileSync(ruta, 'Contenido del backup simulado');
        
        res.status(201).json(nuevaCopia);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la copia de seguridad', error });
    }
};

// Restaurar una copia de seguridad
const restoreCopiaSeguridad = async (req, res) => {
    try {
        const copia = await CopiaSeguridad.findById(req.params.id);
        if (!copia) {
            return res.status(404).json({ message: 'Copia de seguridad no encontrada' });
        }

        // Simulación del proceso de restauración
        const contenidoRestaurado = fs.readFileSync(copia.rutaArchivo, 'utf-8');
        res.status(200).json({ message: 'Copia de seguridad restaurada', contenido: contenidoRestaurado });
    } catch (error) {
        res.status(500).json({ message: 'Error al restaurar la copia de seguridad', error });
    }
};

// Eliminar una copia de seguridad
const deleteCopiaSeguridad = async (req, res) => {
    try {
        const copia = await CopiaSeguridad.findByIdAndDelete(req.params.id);
        if (!copia) {
            return res.status(404).json({ message: 'Copia de seguridad no encontrada' });
        }

        // Eliminar el archivo de la copia del sistema de archivos
        fs.unlinkSync(copia.rutaArchivo);

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la copia de seguridad', error });
    }
};

module.exports = {
    getCopiasSeguridad,
    createCopiaSeguridad,
    restoreCopiaSeguridad,
    deleteCopiaSeguridad,
};
