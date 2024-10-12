// CLIENT/src/components/pages/Cumplimiento.js

import React, { useState } from 'react';

const Cumplimiento = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState('Pendiente');

  const addTask = () => {
    if (taskTitle) {
      const newTask = {
        title: taskTitle,
        status: taskStatus,
        date: new Date().toLocaleDateString(),
      };
      setTasks([...tasks, newTask]);
      setTaskTitle('');
      setTaskStatus('Pendiente');
    }
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Cumplimiento de Actividades</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Cumplimiento</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Agregar Tarea</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Título de la Tarea</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Título"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Estado</label>
                  <select
                    className="form-control"
                    value={taskStatus}
                    onChange={(e) => setTaskStatus(e.target.value)}
                  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="En Progreso">En Progreso</option>
                    <option value="Completada">Completada</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={addTask}
                >
                  Agregar Tarea
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Tareas */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Tareas Registradas</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Estado</th>
                      <th>Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task, index) => (
                      <tr key={index}>
                        <td>{task.title}</td>
                        <td>{task.status}</td>
                        <td>{task.date}</td>
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

export default Cumplimiento;