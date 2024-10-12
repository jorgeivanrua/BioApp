// CLIENT/src/components/pages/Logout.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = () => {
      // Aquí puedes agregar la lógica para cerrar sesión, como limpiar el token de autenticación
      localStorage.removeItem('authToken'); // Ejemplo de eliminación de token
      navigate('/login'); // Redirigir a la página de inicio de sesión
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Cierre de Sesión</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Logout</li>
        </ol>
      </section>

      <section className="content">
        <div className="alert alert-info" role="alert">
          Has cerrado sesión correctamente. Redirigiendo...
        </div>
      </section>
    </div>
  );
};

export default Logout;