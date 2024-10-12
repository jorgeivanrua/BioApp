const mongoose = require('mongoose');

// Definición del esquema para el modelo de Integración
const integracionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    fechaIntegracion: {
        type: Date,
        default: Date.now, // Se genera automáticamente la fecha actual si no se especifica
    },
    estado: {
        type: String,
        required: true,
        enum: ['activa', 'inactiva', 'en mantenimiento'], // Estados posibles para la integración
    },
    detallesTecnicos: {
        type: String,
        required: true,
        trim: true,
    },
    usuarioResponsable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia al modelo de Usuario
        required: true,
    },
    documentacion: [{
        tipo: {
            type: String,
            enum: ['manual', 'guía', 'otro'], // Tipos de documentación
        },
        url: {
            type: String,
            required: true,
        },
    }],
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Crear el modelo
const Integracion = mongoose.model('Integracion', integracionSchema);

module.exports = Integracion;
