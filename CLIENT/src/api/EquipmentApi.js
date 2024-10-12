// CLIENT/src/api/equipmentApi.js

const API_URL = 'http://localhost:5000/api/equipment'; // Cambia esta URL según tu configuración

// Función para obtener todos los equipos
export const fetchEquipments = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error al cargar los equipos');
  }
  return await response.json();
};

// Función para agregar un nuevo equipo
export const addEquipment = async (equipmentData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(equipmentData),
  });
  if (!response.ok) {
    throw new Error('Error al agregar el equipo');
  }
  return await response.json();
};

// Función para actualizar un equipo existente
export const updateEquipment = async (id, equipmentData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(equipmentData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar el equipo');
  }
  return await response.json();
};

// Función para eliminar un equipo
export const deleteEquipment = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar el equipo');
  }
  return await response.json();
};