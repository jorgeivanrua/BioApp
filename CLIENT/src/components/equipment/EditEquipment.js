// Archivo: CLIENT/src/components/equipment/EditEquipment.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'adminlte-2-react';

const EditEquipment = ({ show, onClose, equipment, onUpdate }) => {
    const [equipmentEdited, setEquipmentEdited] = useState({ ...equipment });
    const [formError, setFormError] = useState('');

    // Manejo de cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEquipmentEdited({ ...equipmentEdited, [name]: value });
    };

    // Manejo de la validación del formulario antes de enviar
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(equipmentEdited)) {
            onUpdate(equipmentEdited);
        } else {
            setFormError('Por favor, completa todos los campos requeridos.');
        }
    };

    // Validar los campos requeridos del formulario
    const validateForm = (equipment) => {
        return equipment.nombre && equipment.descripcion && equipment.ubicacion && equipment.modelo && equipment.marca;
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Equipo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formError && <div className="alert alert-danger">{formError}</div>}
                <form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            value={equipmentEdited.nombre}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            type="text"
                            name="descripcion"
                            value={equipmentEdited.descripcion}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            as="select"
                            name="estado"
                            value={equipmentEdited.estado}
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
                            value={equipmentEdited.fechaAdquisicion}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control
                            type="text"
                            name="ubicacion"
                            value={equipmentEdited.ubicacion}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control
                            type="text"
                            name="modelo"
                            value={equipmentEdited.modelo}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Marca</Form.Label>
                        <Form.Control
                            type="text"
                            name="marca"
                            value={equipmentEdited.marca}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Número de Serie</Form.Label>
                        <Form.Control
                            type="text"
                            name="numeroSerie"
                            value={equipmentEdited.numeroSerie}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Costo</Form.Label>
                        <Form.Control
                            type="number"
                            name="costo"
                            value={equipmentEdited.costo}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fecha de Instalación</Form.Label>
                        <Form.Control
                            type="date"
                            name="fechaInstalacion"
                            value={equipmentEdited.fechaInstalacion}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button className="btn btn-primary" type="submit">
                        Guardar Cambios
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default EditEquipment;
