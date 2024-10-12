// CLIENT/src/components/pages/Mantenimiento.js

import React, { useState } from 'react';

const Mantenimiento = () => {
  const [orders, setOrders] = useState([]);
  const [orderTitle, setOrderTitle] = useState('');
  const [responsible, setResponsible] = useState('');

  const addOrder = () => {
    if (orderTitle && responsible) {
      const newOrder = {
        title: orderTitle,
        responsible: responsible,
        date: new Date().toLocaleDateString(),
      };
      setOrders([...orders, newOrder]);
      setOrderTitle('');
      setResponsible('');
    }
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Mantenimiento de Equipos</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Mantenimiento</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Crear Orden de Mantenimiento</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Título de la Orden</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Título"
                    value={orderTitle}
                    onChange={(e) => setOrderTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Responsable</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Responsable"
                    value={responsible}
                    onChange={(e) => setResponsible(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={addOrder}
                >
                  Agregar Orden
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Órdenes */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Órdenes de Mantenimiento</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Responsable</th>
                      <th>Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index}>
                        <td>{order.title}</td>
                        <td>{order.responsible}</td>
                        <td>{order.date}</td>
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

export default Mantenimiento;