// /server/models/Mantenimiento.js

const mongoose = require('mongoose');

// Definición del esquema para el modelo de Mantenimiento
const mantenimientoSchema = new mongoose.Schema({
    equipoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipo', // Referencia al modelo Equipo
        required: true,
    },
    fechaMantenimiento: {
        type: Date,
        required: true,
    },
    tipoMantenimiento: {
        type: String,
        required: true,
        enum: ['preventivo', 'correctivo'], // Tipos de mantenimiento
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    realizadoPor: {
        type: String,
        required: true,
    },
    costo: {
        type: Number,
        required: true,
        min: 0, // Costo no puede ser negativo
    },
    piezasReemplazadas: [{
        nombre: {
            type: String,
            required: true,
        },
        cantidad: {
            type: Number,
            required: true,
            min: 1, // Al menos una pieza
        },
        costo: {
            type: Number,
            required: true,
            min: 0,
        },
    }],
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Validación personalizada para el costo total
mantenimientoSchema.pre('save', function(next) {
    const mantenimiento = this;

    // Calcular la suma de los costos de las piezas reemplazadas
    const sumaPiezas = mantenimiento.piezasReemplazadas.reduce((acc, pieza) => acc + (pieza.costo * pieza.cantidad), 0);

    if (sumaPiezas !== mantenimiento.costo) {
        return next(new Error('El costo total no coincide con la suma de las piezas reemplazadas.'));
    }

    next();
});

// Crear el modelo
const Mantenimiento = mongoose.model('Mantenimiento', mantenimientoSchema);

// Exportar el modelo
module.exports = Mantenimiento;
