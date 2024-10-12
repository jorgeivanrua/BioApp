// /server/models/Rol.js
const mongoose = require('mongoose');

// Definición del esquema
const rolSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true, // El nombre del rol debe ser único
        minlength: 1,
        maxlength: 50, // Limitar la longitud del nombre del rol
    },
    descripcion: {
        type: String,
        maxlength: 200, // Limitar la longitud de la descripción
    },
    permisos: {
        type: [String], // Array de permisos
        required: true,
        default: [], // Inicializar como un array vacío
    },
});

// Crear el modelo
const Rol = mongoose.model('Rol', rolSchema);

module.exports = Rol;
