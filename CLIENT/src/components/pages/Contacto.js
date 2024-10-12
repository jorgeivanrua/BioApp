// CLIENT/src/components/pages/Contacto.js

import React, { useState } from 'react';

const Contacto = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            // Aquí puedes agregar la lógica para enviar el mensaje
            console.log('Mensaje enviado:', { name, email, message });
            setSubmitted(true);
            // Reiniciar campos
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>Contacto</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Contacto</li>
                </ol>
            </section>

            <section className="content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Formulario de Contacto</h3>
                            </div>
                            <div className="card-body">
                                {submitted && (
                                    <div className="alert alert-success" role="alert">
                                        Mensaje enviado con éxito. ¡Gracias por contactarnos!
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Tu nombre"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Correo Electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Tu correo electrónico"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Mensaje</label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            placeholder="Tu mensaje..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Enviar Mensaje
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Información de contacto adicional */}
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Información de Contacto</h3>
                            </div>
                            <div className="card-body">
                                <p><strong>Teléfono:</strong> +57 123 456 7890</p>
                                <p><strong>Email:</strong> soporte@servaf.com</p>
                                <p><strong>Dirección:</strong> Edificio LIBANO, Florencia - Caqueta, Colombia</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contacto;