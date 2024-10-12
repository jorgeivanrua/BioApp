// SERVER/models/Equipment.js

const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, default: 'Operativo' },
    fechaAdquisicion: { type: Date, required: true },
    ubicacion: { type: String, required: true },
    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    numeroSerie: { type: String, required: true },
    costo: { type: Number, required: true },
    fechaUltimoMantenimiento: { type: Date },
    frecuenciaMantenimiento: { type: String },
    responsable: { type: String },
    notasAdicionales: { type: String },
    fechaInstalacion: { type: Date },
    vidaUtilEstimada: { type: Number }, // En años
    condicionesUso: { type: String },
    documentacionAsociada: { type: String },
    historialMantenimiento: [{ date: Date, description: String }],
    categoria: { type: String },
    capacidadEspecificaciones: { type: String },
    proveedor: { type: String },
    contactoProveedor: { type: String },
    garantia: { type: String },
    estadoFinanciero: { type: String }
});

module.exports = mongoose.model('Equipment', equipmentSchema);