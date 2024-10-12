// src/AppRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar'; 
import Footer from './components/layout/Footer';
import Dashboard from './components/pages/Dashboard';
import Equipment from './components/equipment/Equipment';
import EquipmentList from './components/equipment/EquipmentList';
import Mantenimiento from './components/pages/Mantenimiento';
import Inventario from './components/pages/Inventario';
import Integracion from './components/pages/Integracion';
import Cumplimiento from './components/pages/Cumplimiento';
import Security from './components/pages/Security';
import Copias from './components/pages/Copias';
import Usuarios from './components/pages/Usuarios';
import Calendario from './components/pages/Calendario';
import Contacto from './components/pages/Contacto';
import Report from './components/pages/Report';
import Support from './components/pages/Support';
import Notificaciones from './components/pages/Notificaciones';
import Mensajes from './components/pages/Mensajes';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import NotFound from './components/pages/NotFound';


const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas no protegidas */}
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      {/* Rutas protegidas con Navbar, Sidebar y Footer */}
      <Route path="/" element={
        <>
          <Navbar />
          <Sidebar />
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
          <Footer />
        </>
      } />

      {/* Rutas protegidas para otras secciones */}
      {[
        { path: "/equipment", component: Equipment },
        { path: "/equipmentlist", component: EquipmentList },
        { path: "/mantenimiento", component: Mantenimiento },
        { path: "/inventario", component: Inventario },
        { path: "/integracion", component: Integracion },
        { path: "/cumplimiento", component: Cumplimiento },
        { path: "/security", component: Security },
        { path: "/copias", component: Copias },
        { path: "/usuarios", component: Usuarios },
        { path: "/calendario", component: Calendario },
        { path: "/contacto", component: Contacto },
        { path: "/report", component: Report },
        { path: "/mensajes", component: Mensajes },
        { path: "/notificaciones", component: Notificaciones },
        { path: "/support", component: Support }
      ].map(({ path, component }) => (
          <Route key={path} path={path} element={
            <>
              <Navbar />
              <Sidebar />
              <ProtectedRoute>
                {React.createElement(component)}
              </ProtectedRoute>
              <Footer />
            </>
          } />
      ))}

      {/* Ruta para páginas no encontradas */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;