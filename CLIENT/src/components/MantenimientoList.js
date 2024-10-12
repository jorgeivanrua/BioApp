// /client/src/components/MantenimientoList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMantenimientos, deleteMantenimiento } from '../services/equipmentService';

const MantenimientoList = () => {
    const [mantenimientos, setMantenimientos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMantenimientos = async () => {
            try {
                const data = await getMantenimientos();
                setMantenimientos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMantenimientos();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este mantenimiento?')) {
            await deleteMantenimiento(id);
            setMantenimientos(mantenimientos.filter(mantenimiento => mantenimiento.id !== id));
        }
    };

    if (loading) {
        return <p>Cargando mantenimientos...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>Lista de Mantenimientos</h2>
            <Link to="/mantenimiento/nuevo">Agregar Mantenimiento</Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Fecha Último Mantenimiento</th>
                        <th>Frecuencia de Mantenimiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mantenimientos.map(mantenimiento => (
                        <tr key={mantenimiento.id}>
                            <td>{mantenimiento.id}</td>
                            <td>{mantenimiento.descripcion}</td>
                            <td>{mantenimiento.fechaUltimoMantenimiento}</td>
                            <td>{mantenimiento.frecuenciaMantenimiento}</td>
                            <td>
                                <Link to={`/mantenimiento/${mantenimiento.id}`}>Editar</Link>
                                <button onClick={() => handleDelete(mantenimiento.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MantenimientoList;
