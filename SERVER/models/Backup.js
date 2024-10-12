// BIOAPP/SERVER/models/Backup.js
const mongoose = require('mongoose');

// Definición del esquema para las copias de seguridad
const backupSchema = new mongoose.Schema({
    nombreArchivo: {
        type: String,
        required: true, // Este campo es obligatorio
    },
    fechaCreacion: {
        type: Date,
        default: Date.now, // Establece la fecha actual por defecto
    },
    tamanoArchivo: {
        type: Number,
        required: true, // Este campo es obligatorio
    },
    descripcion: {
        type: String,
        default: '', // Valor por defecto vacío
    },
    datos: {
        type: Object,
        required: true, // Este campo es obligatorio
    },
});

// Crea el modelo basado en el esquema
const Backup = mongoose.model('Backup', backupSchema);

module.exports = Backup;
