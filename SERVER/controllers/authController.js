const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

// Función para registrar un nuevo usuario
const registrarUsuario = async (req, res) => {
    try {
        const { nombre, apellido, correo, contraseña, rol } = req.body;

        // Verificar si el correo ya existe
        const usuarioExistente = await Usuario.findOne({ correo });
        if (usuarioExistente) {
            return res.status(400).json({ message: 'El correo ya está registrado.' });
        }

        // Crear nuevo usuario
        const nuevoUsuario = new Usuario({
            nombre,
            apellido,
            correo,
            contraseña,
            rol
        });

        await nuevoUsuario.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor.' });
    }
};

// Función para autenticar un usuario
const autenticarUsuario = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;

        // Buscar usuario por correo
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({ message: 'Credenciales incorrectas.' });
        }

        // Comparar la contraseña
        const contraseñaValida = await usuario.compararContraseña(contraseña);
        if (!contraseñaValida) {
            return res.status(400).json({ message: 'Credenciales incorrectas.' });
        }

        // Crear y firmar el token
        const token = jwt.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor.' });
    }
};

module.exports = {
    registrarUsuario,
    autenticarUsuario
};
