// Ruta: CLIENT/src/components/Mensajes.js

import React, { useState } from 'react';

const Mensajes = () => {
    const [messages] = useState([
        { id: 1, user: 'Juan Pérez', text: '¿Qué tal? ¿Todo bien?', time: 'Hace 4 Horas', details: 'Recuerda revisar el informe de mantenimiento.', avatar: '/dist/img/user1-128x128.jpg' },
        { id: 2, user: 'María López', text: 'Estoy interesado en el producto.', time: 'Hace 2 Horas', details: '¿Podrías enviarme más información?', avatar: '/dist/img/user2-128x128.jpg' },
        { id: 3, user: 'Carlos Ruiz', text: 'La reunión es a las 10 AM.', time: 'Hace 1 Día', details: 'No olvides preparar la presentación.', avatar: '/dist/img/user3-128x128.jpg' },
        { id: 4, user: 'Ana Torres', text: '¿Has visto el nuevo sistema?', time: 'Hace 3 Días', details: 'Es muy intuitivo y fácil de usar.', avatar: '/dist/img/user4-128x128.jpg' },
    ]);

    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>Mensajes</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Mensajes</li>
                </ol>
            </section>

            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Lista de Mensajes</h3>
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
                            {messages.map(message => (
                                <li key={message.id} className={`list-group-item d-flex justify-content-between align-items-center ${expandedId === message.id ? 'bg-light' : ''}`}>
                                    <div className="d-flex align-items-center" onClick={() => toggleExpand(message.id)}>
                                        <img src={message.avatar} alt={message.user} className="img-size-50 mr-3 img-circle" />
                                        <div>
                                            <strong>{message.user}</strong>
                                            <p>{message.text}</p>
                                        </div>
                                    </div>
                                    <small>{message.time}</small>
                                    {expandedId === message.id && (
                                        <div className="mt-2">
                                            <p>{message.details}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card-footer clearfix">
                        <a href="/mensajes" className="btn btn-sm btn-secondary float-right">Ver todos los mensajes</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mensajes;