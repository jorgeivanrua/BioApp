// CLIENT/src/components/EquipmentList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EquipmentList = () => {
  const [equipments, setEquipments] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    estado: 'Operativo',
    fechaAdquisicion: '',
    ubicacion: '',
    modelo: '',
    marca: '',
    numeroSerie: '',
    costo: '',
    fechaUltimoMantenimiento: '',
    frecuenciaMantenimiento: '',
    responsable: '',
    notasAdicionales: '',
    fechaInstalacion: '',
    vidaUtilEstimada: '',
    condicionesUso: '',
    documentacionAsociada: '',
    historialMantenimiento: [],
    categoria: '',
    capacidadEspecificaciones: '',
    proveedor: '',
    contactoProveedor: '',
    garantia: '',
    estadoFinanciero: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEquipments();
  }, []);

  const fetchEquipments = async () => {
    try {
      const response = await axios.get('/api/equipments');
      setEquipments(response.data);
      setError(''); // Reset error message
    } catch (error) {
      console.error('Error fetching equipments:', error);
      setError('Error al cargar los equipos.'); // Set error message
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        await axios.put(`/api/equipments/${editingId}`, formData);
      } else {
        await axios.post('/api/equipments/add', formData);
      }
      fetchEquipments();
      resetForm();
      alert('Equipo guardado con éxito.');
      setError(''); // Reset error message
    } catch (error) {
      console.error('Error saving equipment:', error);
      setError('Error al guardar el equipo. Verifica los datos.'); // Set error message
    }
  };

  const handleEdit = (equipment) => {
    setFormData(equipment);
    setEditingId(equipment._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este equipo?')) {
      try {
        await axios.delete(`/api/equipments/${id}`);
        fetchEquipments();
        alert('Equipo eliminado con éxito.');
        setError(''); // Reset error message
      } catch (error) {
        console.error('Error deleting equipment:', error);
        setError('Error al eliminar el equipo.'); // Set error message
      }
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      descripcion: '',
      estado: 'Operativo',
      fechaAdquisicion: '',
      ubicacion: '',
      modelo: '',
      marca: '',
      numeroSerie: '',
      costo: '',
      fechaUltimoMantenimiento: '',
      frecuenciaMantenimiento: '',
      responsable: '',
      notasAdicionales: '',
      fechaInstalacion: '',
      vidaUtilEstimada: '',
      condicionesUso: '',
      documentacionAsociada: '',
      historialMantenimiento: [],
      categoria: '',
      capacidadEspecificaciones: '',
      proveedor: '',
      contactoProveedor: '',
      garantia: '',
      estadoFinanciero: ''
    });
    setEditingId(null);
  };

  return (
   <div className="content-wrapper">
        <section className="content-header">
            <h1 style={{ marginBottom:'20px' }}>Gestión de Equipos</h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item active">Equipos</li>
            </ol>
        </section>

        <section className="content">
            <div className="container" style={{ maxWidth:'800px', marginTop:'20px' }}>
                {error && <div className="alert alert-danger">{error}</div>}
                <h2>Lista de Equipos</h2>
                
                <form onSubmit={handleSubmit} style={{ marginBottom:'20px', padding:'15px', backgroundColor:'#f8f9fa', borderRadius:'5px', boxShadow:'0 0 10px rgba(0,0,0,0.1)' }}>
                    <div className="form-group">
                      <label>Nombre</label>
                      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Descripción</label>
                      <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Ubicación</label>
                      <input type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Modelo</label>
                      <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Marca</label>
                      <input type="text" name="marca" value={formData.marca} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Número de Serie</label>
                      <input type="text" name="numeroSerie" value={formData.numeroSerie} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Costo</label>
                      <input type="number" name="costo" value={formData.costo} onChange={handleChange} className="form-control" required />
                    </div>

                    {/* Agrega más campos según sea necesario */}
                    
                    <button type="submit" className="btn btn-primary">{editingId ? 'Actualizar' : 'Agregar'} Equipo</button>
                    <button type="button" onClick={resetForm} className="btn btn-secondary ml-2">Cancelar</button>
                </form>

                <ul className="list-group">
                    {equipments.map(equipment => (
                        <li key={equipment._id} className="list-group-item d-flex justify-content-between align-items-center">
                            {equipment.nombre} - {equipment.estado}
                            <div>
                                <button onClick={() => handleEdit(equipment)} className="btn btn-warning btn-sm">Editar</button>
                                <button onClick={() => handleDelete(equipment._id)} className="btn btn-danger btn-sm ml-2">Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
   </div>
  );
};

export default EquipmentList;