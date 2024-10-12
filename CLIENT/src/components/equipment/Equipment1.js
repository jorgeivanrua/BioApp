// CLIENT/src/components/equipment/Equipment.js

import React, { useState } from 'react';
import { Table, Modal, Button, Form } from 'adminlte-2-react';
import useEquipment from '../hooks/useEquipment';
import EditEquipment from './EditEquipment';
import Header from '../common/Header';
import PropTypes from 'prop-types';

const Equipment = ({ someObject = { Header: { title: 'Gestión de Equipos', subtitle: 'Administra tus equipos fácilmente' } } }) => {
  const { equipment, loading, error, addEquipment, deleteEquipment, updateEquipment } = useEquipment();
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newEquipment, setNewEquipment] = useState(initialEquipmentState());
  const [equipmentSelected, setEquipmentSelected] = useState(null);
  const [formError, setFormError] = useState('');

  function initialEquipmentState() {
    return {
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
    };
  }

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const handleShowModal = () => setShowModal(true);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEquipmentSelected(null);
  };

  const handleShowEditModal = (equipment) => {
    setEquipmentSelected(equipment);
    setShowEditModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEquipment({ ...newEquipment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(newEquipment)) {
      try {
        await addEquipment(newEquipment);
        handleCloseModal();
      } catch (error) {
        setFormError('Error al añadir el equipo. Inténtalo de nuevo.');
      }
    } else {
      setFormError('Por favor, completa todos los campos requeridos.');
    }
  };

  const validateForm = (equipment) => {
    return equipment.nombre && equipment.descripcion && equipment.ubicacion && equipment.modelo && equipment.marca;
  };

  const resetForm = () => {
    setNewEquipment(initialEquipmentState());
    setFormError('');
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este equipo?')) {
      try {
        await deleteEquipment(id);
      } catch (error) {
        setFormError('Error al eliminar el equipo. Inténtalo de nuevo.');
      }
    }
  };

  const actualizarEquipment = async (equipmentUpdated) => {
    try {
      await updateEquipment(equipmentUpdated.id, equipmentUpdated);
      handleCloseEditModal();
    } catch (error) {
      setFormError('Error al actualizar el equipo. Inténtalo de nuevo.');
    }
  };

  console.log('finalSomeObject:', someObject);
  console.log('Equipment in Equipment component:', equipment);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <Header
            title={someObject.Header.title}
            subtitle={someObject.Header.subtitle}
          />
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <Button className="btn btn-primary mb-3" onClick={handleShowModal}>
            Agregar Nuevo Equipo
          </Button>

          {formError && <div className="alert alert-danger">{formError}</div>}

          {Array.isArray(equipment) && equipment.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Estado</th>
                  <th>Fecha de Adquisición</th>
                  <th>Ubicación</th>
                  <th>Modelo</th>
                  <th>Marca</th>
                  <th>Costo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map(equip => (
                  <tr key={equip.id}>
                    <td>{equip.id}</td>
                    <td>{equip.nombre}</td>
                    <td>{equip.descripcion}</td>
                    <td>{equip.estado}</td>
                    <td>{equip.fechaAdquisicion}</td>
                    <td>{equip.ubicacion}</td>
                    <td>{equip.modelo}</td>
                    <td>{equip.marca}</td>
                    <td>${equip.costo}</td>
                    <td>
                      <Button className="btn btn-warning me-2" onClick={() => handleShowEditModal(equip)}>
                        Editar
                      </Button>
                      <Button className="btn btn-danger" onClick={() => handleDelete(equip.id)}>
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No hay equipos registrados.</p>
          )}

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Agregar Nuevo Equipo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={newEquipment.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    type="text"
                    name="descripcion"
                    value={newEquipment.descripcion}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    as="select"
                    name="estado"
                    value={newEquipment.estado}
                    onChange={handleChange}
                    required
                  >
                    <option value="Operativo">Operativo</option>
                    <option value="En Mantenimiento">En Mantenimiento</option>
                    <option value="Fuera de Servicio">Fuera de Servicio</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Fecha de Adquisición</Form.Label>
                  <Form.Control
                    type="date"
                    name="fechaAdquisicion"
                    value={newEquipment.fechaAdquisicion}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Ubicación</Form.Label>
                  <Form.Control
                    type="text"
                    name="ubicacion"
                    value={newEquipment.ubicacion}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Cerrar
                  </Button>
                  <Button variant="primary" type="submit">
                    Guardar Cambios
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal>

          {equipmentSelected && (
            <EditEquipment
              equipment={equipmentSelected}
              show={showEditModal}
              handleClose={handleCloseEditModal}
              onSave={actualizarEquipment}
            />
          )}
        </div>
      </section>
    </div>
  );
};

Equipment.propTypes = {
  someObject: PropTypes.shape({
    Header: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string
    })
  })
};

export default Equipment;