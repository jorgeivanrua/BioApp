// /server/models/Usuario.js 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definición del esquema para el modelo de Usuario
const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true, // Correo único para cada usuario
        match: /.+\@.+\..+/ // Validación de formato de correo
    },
    contraseña: {
        type: String,
        required: true,
        minlength: 6, // Mínimo 6 caracteres
    },
    rol: {
        type: String,
        required: true,
        enum: ['administrador', 'usuario', 'soporte'], // Roles permitidos
    },
    fechaCreacion: {
        type: Date,
        default: Date.now, // Fecha por defecto al crear un usuario
    },
    activo: {
        type: Boolean,
        default: true, // Usuario activo por defecto
    },
    fechaUltimoLogin: {
        type: Date,
    },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Método para hashear la contraseña antes de guardar el usuario
usuarioSchema.pre('save', async function(next) {
    if (this.isModified('contraseña')) {
        this.contraseña = await bcrypt.hash(this.contraseña, 10);
    }
    next();
});

// Método para comparar contraseñas
usuarioSchema.methods.compararContraseña = async function(contraseña) {
    return await bcrypt.compare(contraseña, this.contraseña);
};

// Crear el modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
