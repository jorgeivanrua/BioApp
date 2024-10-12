// Ruta: CLIENT/src/components/pages/Login.js

import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular autenticación
    login({ email });
    navigate('/');
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="#"><b>Iniciar</b> Sesión</a>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Inicia sesión para comenzar</p>

            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  {/* Aquí puedes agregar un enlace para recuperar la contraseña */}
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                </div>
                {/* /.col */}
              </div>
            </form>

            {/* Opcional: Enlace para registrarse */}
            <p className="mb-1">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </p>
            {/* Opcional: Enlace para registrarse */}
            <p className="mb-0">
              <a href="#" className="text-center">Registrarse</a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
      {/* /.login-box */}
    </div>
  );
};

export default Login;