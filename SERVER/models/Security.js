// /server/models/Security.js
const mongoose = require('mongoose');

const SecuritySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // Referencia al modelo User
    },
    permissions: {
        type: [String],
        required: true
    },
    roles: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware para actualizar `updatedAt` antes de guardar
SecuritySchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Security = mongoose.model('Security', SecuritySchema);
module.exports = Security;
