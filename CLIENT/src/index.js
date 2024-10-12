// CLIENT/src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // Importa el proveedor de autenticación
import 'admin-lte/dist/css/adminlte.min.css';

const container = document.getElementById('root');
const root = createRoot(container); // Usa createRoot para React 22

root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);