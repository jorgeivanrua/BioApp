// SERVER/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middlewares de seguridad y utilidad
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Cambia a los dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true
}));
app.use(express.json());
app.use(morgan('tiny'));

// Limitador de solicitudes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // limitar cada IP a 100 solicitudes por ventana de tiempo
    message: 'Demasiadas solicitudes desde esta IP, por favor inténtelo de nuevo más tarde.'
});
app.use(limiter);

// Conexión a la base de datos de MongoDB
mongoose.connect(process.env.MONGO_URI, { 
   })
.then(() => console.log('Conexión exitosa a la base de datos'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

// Importar rutas
const routes = [
    { path: '/api/audits', route: require('./routes/auditRoutes') },
    { path: '/api/auth', route: require('./routes/authRoutes') },
    { path: '/api/backup', route: require('./routes/backupRoutes') },
    { path: '/api/copia-seguridad', route: require('./routes/copiaSeguridadRoutes') },
    { path: '/api/cumplimiento', route: require('./routes/cumplimientoRoutes') },
    { path: '/api/equipments', route: require('./routes/equipmentRoutes') },
    { path: '/api/usuarios', route: require('./routes/usuariosRoutes') },
    { path: '/api/mantenimientos', route: require('./routes/mantenimientoRoutes') },
    { path: '/api/integracion', route: require('./routes/integracionRoutes') },
    { path: '/api/inventario', route: require('./routes/inventarioRoutes') },
    { path: '/api/mensajes', route: require('./routes/messageRoutes') },
    { path: '/api/notificaciones', route: require('./routes/notificationRoutes') },
    { path: '/api/report', route: require('./routes/reportRoutes') },
    { path: '/api/roles', route: require('./routes/roleRoutes') },
    { path: '/api/security', route: require('./routes/securityRoutes') },
    { path: '/api/calendario', route: require('./routes/calendarRoutes') },
    { path: '/api/support', route: require('./routes/supportRoutes') },
    { path: '/api/tickets', route: require('./routes/ticketsRoutes') }
];

// Registrar rutas
routes.forEach(({ path, route }) => {
    app.use(path, route);
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejador global de errores
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error interno del servidor', error: err.message });
});

// Configurar el puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});