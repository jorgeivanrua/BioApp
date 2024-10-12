const mongoose = require('mongoose');

// Definición del esquema para el modelo de Reporte
const reportSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    fechaGeneracion: {
        type: Date,
        default: Date.now, // Se genera automáticamente la fecha actual si no se especifica
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia al modelo de Usuario
        required: true,
    },
    equipment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipment', // Referencia al modelo de Equipo
        required: true,
    },
    mantenimiento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mantenimiento', // Referencia al modelo de Mantenimiento
    },
    archivosAdjuntos: [{
        nombre: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    }],
    estado: {
        type: String,
        required: true,
        enum: ['pendiente', 'completado', 'cancelado'], // Estados posibles para el reporte
    },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Crear el modelo
const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
