const mongoose = require('mongoose');

// Definición del esquema para el modelo de Soporte
const supportSchema = new mongoose.Schema({
    asunto: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    fechaSolicitud: {
        type: Date,
        default: Date.now, // Se genera automáticamente la fecha actual si no se especifica
    },
    estado: {
        type: String,
        required: true,
        enum: ['pendiente', 'en progreso', 'resuelto', 'cerrado'], // Estados posibles para la solicitud de soporte
    },
    usuarioSolicitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia al modelo de Usuario
        required: true,
    },
    asignadoA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia al modelo de Usuario para el soporte asignado
    },
    comentarios: [{
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario', // Referencia al modelo de Usuario que deja el comentario
        },
        mensaje: {
            type: String,
            required: true,
            trim: true,
        },
        fecha: {
            type: Date,
            default: Date.now, // Fecha del comentario
        },
    }],
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Crear el modelo
const support = mongoose.model('Support', supportSchema);

module.exports = Support;
