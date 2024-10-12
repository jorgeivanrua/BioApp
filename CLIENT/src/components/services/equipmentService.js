// /client/src/services/equipmentService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/equipment'; // Cambia esto según tu configuración de API

// Obtener la lista de equipos
export const getEquipment = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener la lista de equipos: ' + error.message);
    }
};

// Agregar un nuevo equipo
export const addEquipment = async (equipment) => {
    try {
        const response = await axios.post(API_URL, equipment);
        return response.data;
    } catch (error) {
        throw new Error('Error al agregar el equipo: ' + error.message);
    }
};

// Actualizar un equipo existente
export const updateEquipment = async (equipment) => {
    try {
        const response = await axios.put(`${API_URL}/${equipment.id}`, equipmnet);
        return response.data;
    } catch (error) {
        throw new Error('Error al actualizar el equipo: ' + error.message);
    }
};

// Eliminar un equipo
export const deleteEquipment = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error al eliminar el equipo: ' + error.message);
    }
};

// Obtener un equipo por ID
export const getEquipmentById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener el equipo: ' + error.message);
    }
};
