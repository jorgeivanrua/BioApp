import axios from 'axios';

// URL base del API de soporte
const API_URL = '/api/support';

// Función para obtener todos los tickets de soporte
export const getSupportItems = async () => {
    const response = await axios.get(API_URL);
    return response.data; // Suponiendo que la respuesta contiene un array de tickets
};

// Función para crear un nuevo ticket de soporte
export const addSupportItem = async (ticketData) => {
    const response = await axios.post(API_URL, ticketData);
    return response.data; // Suponiendo que la respuesta contiene el ticket creado
};

// Función para obtener un ticket por ID
export const getSupportItemById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Suponiendo que la respuesta contiene el ticket
};

// Función para actualizar un ticket de soporte
export const updateSupportItem = async (id, ticketData) => {
    const response = await axios.put(`${API_URL}/${id}`, ticketData);
    return response.data; // Suponiendo que la respuesta contiene el ticket actualizado
};

// Función para eliminar un ticket de soporte
export const deleteSupportItem = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data; // Suponiendo que la respuesta contiene un mensaje de éxito o el ticket eliminado
};
