// CLIENT/src/components/pages/Integracion.js

import React, { useState } from 'react';

const Integracion = () => {
  const [integrations, setIntegrations] = useState([]);
  const [integrationName, setIntegrationName] = useState('');
  const [integrationURL, setIntegrationURL] = useState('');

  const addIntegration = () => {
    if (integrationName && integrationURL) {
      const newIntegration = { name: integrationName, url: integrationURL };
      setIntegrations([...integrations, newIntegration]);
      setIntegrationName('');
      setIntegrationURL('');
    }
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Integración de Sistemas</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Integración</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Agregar Integración</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Nombre de la Integración</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={integrationName}
                    onChange={(e) => setIntegrationName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>URL de la Integración</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="URL"
                    value={integrationURL}
                    onChange={(e) => setIntegrationURL(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={addIntegration}
                >
                  Agregar Integración
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Integraciones */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Integraciones Activas</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {integrations.map((integration, index) => (
                      <tr key={index}>
                        <td>{integration.name}</td>
                        <td>{integration.url}</td>
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

export default Integracion;