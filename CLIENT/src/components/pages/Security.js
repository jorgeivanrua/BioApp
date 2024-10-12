// CLIENT/src/components/pages/Security.js

import React, { useState } from 'react';

const Security = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('Usuario');

  const addUser = () => {
    if (username) {
      const newUser = { name: username, role: role };
      setUsers([...users, newUser]);
      setUsername('');
      setRole('Usuario');
    }
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Seguridad y Control de Acceso</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Seguridad</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Agregar Usuario</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Nombre de Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Rol</label>
                  <select
                    className="form-control"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="Usuario">Usuario</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Técnico">Técnico</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={addUser}
                >
                  Agregar Usuario
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Usuarios */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Usuarios Registrados</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Rol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
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

export default Security;