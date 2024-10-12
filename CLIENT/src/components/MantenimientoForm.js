// /client/src/components/MantenimientoForm.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addMantenimiento, getMantenimientoDetails, updateMantenimiento } from '../services/equipmentService';

const MantenimientoForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        descripcion: '',
        fechaUltimoMantenimiento: '',
        frecuenciaMantenimiento: '',
    });
    
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (id) {
            const fetchMantenimiento = async () => {
                const mantenimiento = await getMantenimientoDetails(id);
                setFormData(mantenimiento);
            };
            fetchMantenimiento();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateMantenimiento(id, formData);
            } else {
                await addMantenimiento(formData);
            }
            navigate('/mantenimiento');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>{id ? 'Editar Mantenimiento' : 'Agregar Mantenimiento'}</h2>
            {error && <p>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Descripción</label>
                    <input
                        type="text"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Fecha Último Mantenimiento</label>
                    <input
                        type="date"
                        name="fechaUltimoMantenimiento"
                        value={formData.fechaUltimoMantenimiento}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Frecuencia de Mantenimiento</label>
                    <input
                        type="text"
                        name="frecuenciaMantenimiento"
                        value={formData.frecuenciaMantenimiento}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{id ? 'Actualizar' : 'Agregar'}</button>
            </form>
        </div>
    );
};

export default MantenimientoForm;
