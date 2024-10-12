// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // Temporalmente permitir acceso a todas las rutas sin autenticación
  const skipAuth = true; // Cambiar a `false` cuando se desee reactivar la autenticación.

  if (skipAuth || currentUser) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;