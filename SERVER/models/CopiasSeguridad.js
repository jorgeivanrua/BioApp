const mongoose = require('mongoose');

// Definición del esquema para el modelo de Copias de Seguridad
const copiasSeguridadSchema = new mongoose.Schema({
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
    fechaCreacion: {
        type: Date,
        default: Date.now, // Fecha de creación de la copia de seguridad
    },
    tipo: {
        type: String,
        enum: ['local', 'remota'], // Tipos de copias de seguridad
        required: true,
    },
    responsable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia al modelo de Usuario responsable
        required: true,
    },
    estado: {
        type: String,
        required: true,
        enum: ['completada', 'pendiente', 'fallida'], // Estados posibles de la copia
    },
    tamaño: {
        type: Number,
        required: true, // Tamaño de la copia de seguridad en MB
    },
    rutaAlmacenamiento: {
        type: String,
        required: true, // Ruta donde se almacena la copia de seguridad
    },
    frecuencia: {
        type: String,
        required: true,
        enum: ['diaria', 'semanal', 'mensual'], // Frecuencia de realización de la copia
    },
    ultimaVerificacion: {
        type: Date,
        required: true, // Fecha de la última verificación de la copia de seguridad
    },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Crear el modelo
const CopiasSeguridad = mongoose.model('CopiasSeguridad', copiasSeguridadSchema);

module.exports = CopiasSeguridad;
