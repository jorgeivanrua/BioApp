import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [messages] = useState([
        { id: 1, user: 'Juan Pérez', text: '¿Qué tal? ¿Todo bien?', time: 'Hace 4 horas', avatar: '/user-avatar.jpg' },
        { id: 2, user: 'María López', text: 'Estoy interesado en el producto.', time: 'Hace 2 horas', avatar: '/user-avatar2.jpg' },
    ]);

    const [notifications] = useState([
        { id: 1, text: '4 nuevos mensajes', time: 'Hace 3 minutos' },
        { id: 2, text: '8 nuevas solicitudes', time: 'Hace 12 horas' },
    ]);

    return (
        <nav className="main-header navbar navbar-expand navbar-dark">

            <ul className="navbar-nav">
                <li className="nav-item">
                    <button className="nav-link" data-widget="pushmenu" aria-label="Toggle menu" role="button">
                        <i className="fas fa-bars"></i>
                    </button>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/contacto" className="nav-link">Contacto</Link>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                {/* Barra de búsqueda */}
                <li className="nav-item">
                    <button className="nav-link" data-widget="navbar-search" aria-label="Buscar" role="button">
                        <i className="fas fa-search"></i>
                    </button>
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Buscar" aria-label="Buscar" />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                    <button className="btn btn-navbar" type="button" data-widget="navbar-search" aria-label="Cerrar búsqueda">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                {/* Dropdown de mensajes */}
                <li className="nav-item dropdown">
                    <button className="nav-link" data-toggle="dropdown" aria-label="Ver mensajes" role="button">
                        <i className="far fa-comments"></i>
                        <span className="badge badge-danger navbar-badge">{messages.length}</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        {messages.map((message) => (
                            <a href="#" key={message.id} className="dropdown-item">
                                <div className="media">
                                    <img src={message.avatar} alt={`${message.user} avatar`} className="img-size-50 mr-3 img-circle" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            {message.user}
                                            <span className="float-right text-sm text-muted"><i className="far fa-clock mr-1"></i> {message.time}</span>
                                        </h3>
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                        <div className="dropdown-divider"></div>
                        <a href="/mensajes" className="dropdown-item dropdown-footer">Ver todos los mensajes</a>
                    </div>
                </li>

                {/* Dropdown de notificaciones */}
                <li className="nav-item dropdown">
                    <button className="nav-link" data-toggle="dropdown" aria-label="Ver notificaciones" role="button">
                        <i className="far fa-bell"></i>
                        <span className="badge badge-warning navbar-badge">{notifications.length}</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-item dropdown-header">{notifications.length} Notificaciones</span>
                        {notifications.map((notification) => (
                            <a href="#" key={notification.id} className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> {notification.text}
                                <span className="float-right text-muted text-sm">{notification.time}</span>
                            </a>
                        ))}
                        <div className="dropdown-divider"></div>
                        <a href="/notificaciones" className="dropdown-item dropdown-footer">Ver todas las notificaciones</a>
                    </div>
                </li>

                <li className="nav-item">
                    <button className="nav-link" data-widget="fullscreen" aria-label="Pantalla completa" role="button">
                        <i className="fas fa-expand-arrows-alt"></i>
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" data-widget="control-sidebar" data-slide="true" aria-label="Ver más opciones" role="button">
                        <i className="fas fa-th-large"></i>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
