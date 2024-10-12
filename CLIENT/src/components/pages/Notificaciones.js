// Ruta: CLIENT/src/components/Notificaciones.js

import React, { useState } from 'react';

const Notificaciones = () => {
    const [notifications] = useState([
        { id: 1, type: 'message', text: '4 nuevos mensajes', time: '3 mins', details: 'Revisa tus mensajes en la bandeja de entrada.', icon: 'fas fa-envelope' },
        { id: 2, type: 'request', text: '8 nuevas solicitudes', time: '12 horas', details: 'Tienes 8 solicitudes pendientes de aprobación.', icon: 'fas fa-users' },
        { id: 3, type: 'report', text: '3 nuevos reportes', time: '2 días', details: 'Se han generado 3 nuevos reportes de mantenimiento.', icon: 'fas fa-file' },
        { id: 4, type: 'update', text: 'Actualización de sistema disponible', time: '1 semana', details: 'Una nueva versión del sistema está disponible para su instalación.', icon: 'fas fa-exclamation-triangle' },
    ]);
    
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>Notificaciones</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Notificaciones</li>
                </ol>
            </section>
            
            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Lista de Notificaciones</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>

                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            {notifications.map(notification => (
                                <li key={notification.id} className={`list-group-item d-flex justify-content-between align-items-center ${expandedId === notification.id ? 'bg-light' : ''}`}>
                                    <div className="d-flex align-items-center" onClick={() => toggleExpand(notification.id)}>
                                        <i className={`${notification.icon} mr-2`}></i>
                                        <span>{notification.text}</span>
                                    </div>
                                    <small>{notification.time}</small>
                                    {expandedId === notification.id && (
                                        <div className="mt-2">
                                            <p>{notification.details}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card-footer clearfix">
                        <a href="/notificaciones" className="btn btn-sm btn-secondary float-right">Ver todas las notificaciones</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Notificaciones;