// /client/src/components/equipment/EquipmentForm.js
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'adminlte-2-react';

const EquipmentForm = ({ show, onHide, onSubmit, equipo }) => {
    const [formData, setFormData] = useState(initialEquipoState());
    const [formError, setFormError] = useState('');

    useEffect(() => {
        if (equipo) {
            setFormData(equipo);
        } else {
            setFormData(initialEquipoState());
        }
    }, [equipo]);

    function initialEquipoState() {
        return {
            id: '',
            nombre: '',
            descripcion: '',
            estado: 'Operativo',
            fechaAdquisicion: '',
            ubicacion: '',
            modelo: '',
            marca: '',
            numeroSerie: '',
            costo: '',
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(formData)) {
            onSubmit(formData);
            handleClose();
        } else {
            setFormError('Por favor, completa todos los campos requeridos.');
        }
    };

    const validateForm = (data) => {
        return data.nombre && data.descripcion && data.ubicacion && data.modelo && data.marca;
    };

    const handleClose = () => {
        setFormError('');
        onHide();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{equipo ? 'Editar Equipo' : 'Agregar Nuevo Equipo'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formError && <div className="alert alert-danger">{formError}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripción</label>
                        <textarea
                            className="form-control"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Estado</label>
                        <select
                            className="form-control"
                            name="estado"
                            value={formData.estado}
                            onChange={handleChange}
                        >
                            <option value="Operativo">Operativo</option>
                            <option value="En Mantenimiento">En Mantenimiento</option>
                            <option value="Fuera de Servicio">Fuera de Servicio</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Fecha de Adquisición</label>
                        <input
                            type="date"
                            className="form-control"
                            name="fechaAdquisicion"
                            value={formData.fechaAdquisicion}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ubicación</label>
                        <input
                            type="text"
                            className="form-control"
                            name="ubicacion"
                            value={formData.ubicacion}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Modelo</label>
                        <input
                            type="text"
                            className="form-control"
                            name="modelo"
                            value={formData.modelo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Marca</label>
                        <input
                            type="text"
                            className="form-control"
                            name="marca"
                            value={formData.marca}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Número de Serie</label>
                        <input
                            type="text"
                            className="form-control"
                            name="numeroSerie"
                            value={formData.numeroSerie}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Costo</label>
                        <input
                            type="number"
                            className="form-control"
                            name="costo"
                            value={formData.costo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Frecuencia de Mantenimiento</label>
                        <input
                            type="text"
                            className="form-control"
                            name="frecuenciaMantenimiento"
                            value={formData.frecuenciaMantenimiento}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Responsable</label>
                        <input
                            type="text"
                            className="form-control"
                            name="responsable"
                            value={formData.responsable}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Notas Adicionales</label>
                        <textarea
                            className="form-control"
                            name="notasAdicionales"
                            value={formData.notasAdicionales}
                            onChange={handleChange}
                        />
                    </div>
                    <Button className="btn btn-primary" type="submit">
                        {equipo ? 'Actualizar' : 'Agregar'}
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default EquipmentForm;
