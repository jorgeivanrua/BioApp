// BIOAPP/SERVER/config/auth.js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user._id, rol: user.rol }, 'admin', { expiresIn: '30d' });
};

module.exports = { generateToken };