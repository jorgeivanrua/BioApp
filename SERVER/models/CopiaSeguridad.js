// BIOAPP/SERVER/models/CopiaSeguridad.js
const mongoose = require('mongoose');

const CopiaSeguridadSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha: { type: Date, required: true },
    usuario: { type: String, required: true },
    estado: { type: String, enum: ['Completo', 'Fallido'], default: 'Completo' },
}, { timestamps: true }); // Timestamps para crear y actualizar

const CopiaSeguridad = mongoose.model('CopiaSeguridad', CopiaSeguridadSchema);
module.exports = CopiaSeguridad;
