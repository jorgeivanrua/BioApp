const mongoose = require('mongoose');

// Definición del esquema para el modelo de Inventario
const inventarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        trim: true,
    },
    cantidad: {
        type: Number,
        required: true,
        min: 0, // No puede ser negativo
    },
    unidadMedida: {
        type: String,
        required: true,
        enum: ['unidad', 'kg', 'litro'], // Unidades permitidas
    },
    fechaAdquisicion: {
        type: Date,
        required: true,
    },
    proveedor: {
        type: String,
        required: true,
    },
    costoUnitario: {
        type: Number,
        required: true,
        min: 0, // No puede ser negativo
    },
    estado: {
        type: String,
        required: true,
        enum: ['disponible', 'en uso', 'fuera de servicio', 'a dar de baja'], // Estados posibles
    },
    notas: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Crear el modelo
const Inventario = mongoose.model('Inventario', inventarioSchema);

module.exports = Inventario;
