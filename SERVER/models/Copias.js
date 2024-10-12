const mongoose = require('mongoose');

// Definición del esquema para el modelo de Copias
const copiaSchema = new mongoose.Schema({
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
        default: Date.now, // Fecha de creación de la copia
    },
    tipo: {
        type: String,
        enum: ['completa', 'incremental'], // Tipos de copia
        required: true,
    },
    responsable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia al modelo de Usuario responsable de la copia
        required: true,
    },
    estado: {
        type: String,
        required: true,
        enum: ['completada', 'pendiente', 'fallida'], // Estados posibles de la copia
    },
    tamaño: {
        type: Number,
        required: true, // Tamaño de la copia en MB
    },
    rutaAlmacenamiento: {
        type: String,
        required: true, // Ruta donde se almacena la copia
    },
    fechaUltimaVerificacion: {
        type: Date,
        required: true, // Fecha de la última verificación de la copia
    },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Crear el modelo
const Copias = mongoose.model('Copias', copiaSchema);

module.exports = Copias;
