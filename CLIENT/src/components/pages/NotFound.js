// src/components/pages/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

// Estilos opcionales para mejorar la presentación
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  header: {
    fontSize: '2em',
    color: '#ff0000',
  },
  paragraph: {
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  link: {
    fontSize: '1em',
    color: '#007bff',
    textDecoration: 'none',
  }
};

// Componente funcional para manejar la página 404
const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404 - Página no encontrada</h1>
      <p style={styles.paragraph}>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
      <Link to="/" style={styles.link}>Regresar al inicio</Link>
    </div>
  );
};

export default NotFound;