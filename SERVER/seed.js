// seed.js

const mongoose = require('mongoose');
const Equipment = require('./models/Equipment'); // Ajusta la ruta según sea necesario

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Conexión exitosa a MongoDB');
    return Equipment.deleteMany(); // Limpia la colección antes de insertar nuevos datos
})
.then(() => {
    const equipments = [
        {
            nombre: 'Compresor de Aire',
            descripcion: 'Compresor industrial para herramientas neumáticas.',
            estado: 'Operativo',
            fechaAdquisicion: new Date('2020-01-15'),
            ubicacion: 'Taller Principal',
            modelo: 'CA-2000',
            marca: 'AirTech',
            numeroSerie: 'AT123456',
            costo: 1500,
            fechaUltimoMantenimiento: new Date('2023-03-10'),
            frecuenciaMantenimiento: 'Mensual',
            responsable: 'Juan Pérez',
            notasAdicionales: 'Revisar cada mes.',
            fechaInstalacion: new Date('2020-01-20'),
            vidaUtilEstimada: 10,
            condicionesUso: 'Uso regular en el taller.',
            documentacionAsociada: 'Manual del usuario disponible.',
            historialMantenimiento: [],
            categoria: 'Herramientas',
            capacidadEspecificaciones: '200 L/min',
            proveedor: 'Proveedores S.A.',
            contactoProveedor: 'contacto@proveedores.com',
            garantia: '2 años',
            estadoFinanciero: 'Activo'
        },
        {
            nombre: 'Generador Eléctrico',
            descripcion: 'Generador portátil para emergencias.',
            estado: 'Operativo',
            fechaAdquisicion: new Date('2021-06-01'),
            ubicacion: 'Almacén',
            modelo: 'GE-5000',
            marca: 'PowerGen',
            numeroSerie: 'PG654321',
            costo: 800,
            fechaUltimoMantenimiento: new Date('2023-02-15'),
            frecuenciaMantenimiento: 'Trimestral',
            responsable: 'Ana Gómez',
            notasAdicionales: '',
            fechaInstalacion: new Date('2021-06-05'),
            vidaUtilEstimada: 8,
            condicionesUso: 'Uso ocasional durante cortes de energía.',
            documentacionAsociada: '',
            historialMantenimiento: [],
            categoria: 'Electrónica',
            capacidadEspecificaciones: '5000W',
            proveedor: 'Generadores S.A.',
            contactoProveedor: 'ventas@generadores.com',
            garantia: '1 año',
            estadoFinanciero: 'Activo'
        }
    ];

    return Equipment.insertMany(equipments);
})
.then(() => {
    console.log('Datos de ejemplo insertados correctamente');
    mongoose.connection.close();
})
.catch(err => {
    console.error('Error al insertar datos:', err);
    mongoose.connection.close();
});