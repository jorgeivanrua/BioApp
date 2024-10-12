// /server/models/Notificacion.js
const mongoose = require('mongoose');

// Definición del esquema
const notificacionSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia al modelo de Usuario
        required: true,
    },
    mensaje: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500, // Limitar la longitud del mensaje
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
    leido: {
        type: Boolean,
        default: false,
    },
});

// Crear el modelo
const Notificacion = mongoose.model('Notificacion', notificacionSchema);

module.exports = Notificacion;
