// BIOAPP/SERVER/services/backupService.js
const Backup = require('../models/Backup'); // Suponiendo que hay un modelo Backup definido
const { createBackupFile, restoreBackupFile, deleteBackupFile } = require('../utils/backupUtils'); // Funciones utilitarias para manejar archivos

// Función para crear una nueva copia de seguridad
const createBackup = async (data) => {
    // Aquí puedes agregar lógica adicional para validar los datos
    const backupFilePath = await createBackupFile(data);
    
    const newBackup = new Backup({
        filePath: backupFilePath,
        createdAt: new Date(),
        // Otras propiedades como el usuario que creó la copia, etc.
    });

    return await newBackup.save(); // Guarda la copia en la base de datos
};

// Función para obtener todas las copias de seguridad
const getAllBackups = async () => {
    return await Backup.find(); // Devuelve todas las copias de seguridad
};

// Función para restaurar una copia de seguridad
const restoreBackup = async (id) => {
    const backup = await Backup.findById(id);
    if (!backup) throw new Error('Copia de seguridad no encontrada');
    
    await restoreBackupFile(backup.filePath); // Llama a la función utilitaria para restaurar
    return { message: 'Copia de seguridad restaurada exitosamente' };
};

// Función para eliminar una copia de seguridad
const deleteBackup = async (id) => {
    const backup = await Backup.findById(id);
    if (!backup) throw new Error('Copia de seguridad no encontrada');

    await deleteBackupFile(backup.filePath); // Llama a la función utilitaria para eliminar el archivo
    await Backup.deleteOne({ _id: id }); // Elimina el registro de la base de datos
};

module.exports = {
    createBackup,
    getAllBackups,
    restoreBackup,
    deleteBackup,
};
