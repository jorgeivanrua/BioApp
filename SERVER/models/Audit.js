// /server/models/Audit.js
const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
    details: { type: String, required: true },
    user: { type: String, required: true }, // Quién realizó la auditoría
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
});

const Audit = mongoose.model('Audit', auditSchema);

module.exports = Audit;