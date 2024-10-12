// CLIENT/src/components/pages/Support.js

import React, { useState } from 'react';

const Support = () => {
  const [tickets, setTickets] = useState([]);
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');

  const addTicket = () => {
    if (ticketTitle && ticketDescription) {
      const newTicket = {
        title: ticketTitle,
        description: ticketDescription,
        date: new Date().toLocaleDateString(),
      };
      setTickets([...tickets, newTicket]);
      setTicketTitle('');
      setTicketDescription('');
    }
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Soporte Técnico</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Soporte</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Crear Ticket de Soporte</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Título del Ticket</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Título"
                    value={ticketTitle}
                    onChange={(e) => setTicketTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Descripción</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Descripción del problema"
                    value={ticketDescription}
                    onChange={(e) => setTicketDescription(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={addTicket}
                >
                  Agregar Ticket
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Tickets */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Tickets de Soporte</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Descripción</th>
                      <th>Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket, index) => (
                      <tr key={index}>
                        <td>{ticket.title}</td>
                        <td>{ticket.description}</td>
                        <td>{ticket.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Support;