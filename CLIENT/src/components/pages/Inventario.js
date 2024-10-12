// CLIENT/src/components/pages/Inventario.js

import React from 'react';

const Inventario = () => {
  const inventoryData = [
    {
      id: 1,
      nombre: 'Equipo A',
      descripcion: 'Descripción del Equipo A',
      estado: 'Operativo',
      fechaAdquisicion: '2022-01-01',
      ubicacion: 'Almacén 1',
      costo: 1000,
    },
    {
      id: 2,
      nombre: 'Equipo B',
      descripcion: 'Descripción del Equipo B',
      estado: 'Bajo',
      fechaAdquisicion: '2022-02-15',
      ubicacion: 'Almacén 2',
      costo: 1500,
    },
    {
      id: 3,
      nombre: 'Equipo C',
      descripcion: 'Descripción del Equipo C',
      estado: 'Agotado',
      fechaAdquisicion: '2022-03-10',
      ubicacion: 'Almacén 3',
      costo: 2000,
    },
  ];

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Inventario</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Inventario</li>
        </ol>
      </section>
      
      <section className="content">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h3 className="card-title">Lista de Inventario</h3>
          </div>
          <div className="card-body">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Estado</th>
                  <th>Fecha de Adquisición</th>
                  <th>Ubicación</th>
                  <th>Costo</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr key={item.id} className={item.estado === 'Agotado' ? 'table-danger' : item.estado === 'Bajo' ? 'table-warning' : ''}>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.descripcion}</td>
                    <td>{item.estado}</td>
                    <td>{item.fechaAdquisicion}</td>
                    <td>{item.ubicacion}</td>
                    <td>${item.costo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inventario;