import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="/" className="brand-link">
        <span className="brand-text font-weight-light">Sistema Gestión</span>
      </a>

      {/* Sidebar */}
      <div className="sidebar">
        {/* User Panel */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="path/to/your/profile/image.jpg" className="img-circle elevation-2" alt="User" />
          </div>
          <div className="info">
            <a href="#" className="d-block">Nombre de Usuario</a>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Dashboard */}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </Link>
            </li>
            {/* Equipment */}
            <li className="nav-item">
              <Link to="/equipmentlist" className="nav-link">
                <i className="nav-icon fas fa-cogs" />
                <p>Equipos</p>
              </Link>
            </li>
            {/* Mantenimiento */}
            <li className="nav-item">
              <Link to="/mantenimiento" className="nav-link">
                <i className="nav-icon fas fa-wrench" />
                <p>Mantenimiento</p>
              </Link>
            </li>
            {/* Inventario */}
            <li className="nav-item">
              <Link to="/inventario" className="nav-link">
                <i className="nav-icon fas fa-box" />
                <p>Inventario</p>
              </Link>
            </li>
            {/* Integración */}
            <li className="nav-item">
              <Link to="/integracion" className="nav-link">
                <i className="nav-icon fas fa-plug" />
                <p>Integración</p>
              </Link>
            </li>
            {/* Cumplimiento */}
            <li className="nav-item">
              <Link to="/cumplimiento" className="nav-link">
                <i className="nav-icon fas fa-check-circle" />
                <p>Cumplimiento</p>
              </Link>
            </li>
            {/* Seguridad */}
            <li className="nav-item">
              <Link to="/security" className="nav-link">
                <i className="nav-icon fas fa-shield-alt" />
                <p>Seguridad</p>
              </Link>
            </li>
            {/* Report */}
            <li className="nav-item">
              <Link to="/report" className="nav-link">
                <i className="nav-icon fas fa-file-alt" />
                <p>Reportes</p>
              </Link>
            </li>
            {/* Support */}
            <li className="nav-item">
              <Link to="/support" className="nav-link">
                <i className="nav-icon fas fa-headset" />
                <p>Soporte</p>
              </Link>
            </li>
            {/* Copias de seguridad */}
            <li className="nav-item">
              <Link to="/copias" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>Copias de Seguridad</p>
              </Link>
            </li>
            {/* Usuarios */}
            <li className="nav-item">
              <Link to="/usuarios" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>Usuarios</p>
              </Link>
            </li>
            {/* Calendario */}
            <li className="nav-item">
              <Link to="/calendario" className="nav-link">
                <i className="nav-icon fas fa-calendar-alt" />
                <p>Calendario</p>
              </Link>
            </li>
            {/* Contacto */}
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">
                <i className="nav-icon fas fa-address-book" />
                <p>Contacto</p>
              </Link>
            </li>
            {/* Cerrar Sesión */}
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt" />
                <p>Cerrar Sesión</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
