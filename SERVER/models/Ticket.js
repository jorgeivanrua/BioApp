// /server/models/Ticket.js
const mongoose = require('mongoose');

// Definición del esquema para los Tickets de Soporte
const ticketSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        enum: ['abierto', 'en_progreso', 'cerrado'],
        default: 'abierto',
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
    fechaCierre: {
        type: Date,
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia al usuario que crea el ticket
        required: true,
    },
    asignadoA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia al usuario asignado para resolver el ticket
    },
    prioridad: {
        type: String,
        enum: ['baja', 'media', 'alta'],
        default: 'media',
    }
}, { timestamps: true });

// Crear el modelo de Ticket
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
