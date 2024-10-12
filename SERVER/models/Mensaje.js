// /server/models/Mensaje.js
const mongoose = require('mongoose');

// Definición del esquema
const mensajeSchema = new mongoose.Schema({
    remitente: {
        type: String,
        required: true,
    },
    destinatario: {
        type: String,
        required: true,
    },
    contenido: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500, // Limitar la longitud del contenido
    },
    fechaEnvio: {
        type: Date,
        default: Date.now,
    },
    leido: {
        type: Boolean,
        default: false,
    },
});

// Crear el modelo
const Mensaje = mongoose.model('Mensaje', mensajeSchema);

module.exports = Mensaje;
