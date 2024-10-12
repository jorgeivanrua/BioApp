// /client/src/contexts/EquipmentContext.js
import React, { createContext, useState } from 'react';
import equipmentService from '../services/equipmentService';

export const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchEquipment = async () => {
        setLoading(true);
        try {
            const data = await equipmentService.getEquipmentList();
            setEquipment(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <EquipmentContext.Provider value={{ fetchEquipment, equipment, loading, error }}>
            {children}
        </EquipmentContext.Provider>
    );
};
