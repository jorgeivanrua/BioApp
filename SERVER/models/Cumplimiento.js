const mongoose = require('mongoose');

// Definición del esquema para el modelo de Cumplimiento
const cumplimientoSchema = new mongoose.Schema({
    norma: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    fechaCumplimiento: {
        type: Date,
        required: true,
    },
    responsable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia al modelo de Usuario responsable del cumplimiento
        required: true,
    },
    estado: {
        type: String,
        required: true,
        enum: ['cumplido', 'pendiente', 'no cumplido'], // Estados posibles
    },
    evidencias: [{
        tipo: {
            type: String,
            enum: ['documento', 'imagen', 'video'], // Tipos de evidencias
            required: true,
        },
        enlace: {
            type: String,
            required: true,
        },
        fechaSubida: {
            type: Date,
            default: Date.now, // Fecha de subida de la evidencia
        },
    }],
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Crear el modelo
const Cumplimiento = mongoose.model('Cumplimiento', cumplimientoSchema);

module.exports = Cumplimiento;
