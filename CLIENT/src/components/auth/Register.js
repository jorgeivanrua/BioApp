// BIOAPP/CLIENT/src/components/auth/Register.js
import React, { useState } from 'react';
import { registerService } from '../../services/authService';

const Register = () => {
    const [userData, setUserData] = useState({
        nombre: '',
        correo: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        try {
            await registerService(userData);
            setSuccess(true); // Marca éxito al registrar
        } catch (err) {
            setError('Error al registrar usuario');
        }
    };

    return (
        <div className="register-container">
            <h2>Registro de Usuario</h2>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">Registro exitoso, ¡bienvenido!</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    value={userData.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    value={userData.correo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={userData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
