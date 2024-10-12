// CLIENT/src/components/pages/Copias.js

import React, { useState } from 'react';

const Copias = () => {
  const [backups, setBackups] = useState([]);
  const [backupName, setBackupName] = useState('');

  const addBackup = () => {
    if (backupName) {
      const newBackup = {
        name: backupName,
        date: new Date().toLocaleDateString(),
      };
      setBackups([...backups, newBackup]);
      setBackupName('');
    }
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Gestión de Copias de Seguridad</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Copias</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Crear Copia de Seguridad</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Nombre de la Copia</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={backupName}
                    onChange={(e) => setBackupName(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={addBackup}
                >
                  Agregar Copia
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Copias */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Copias de Seguridad Registradas</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {backups.map((backup, index) => (
                      <tr key={index}>
                        <td>{backup.name}</td>
                        <td>{backup.date}</td>
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

export default Copias;