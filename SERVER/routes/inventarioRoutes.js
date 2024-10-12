// /server/routes/inventarioRoutes.js
const express = require('express');
const router = express.Router();

const {
    getInventarios,
    createInventario,
    getInventarioById,
    updateInventario,
    deleteInventario,
} = require('../controllers/inventarioController');



// Rutas
router.get('/inventarios', getInventarios);
router.post('/inventarios', createInventario);
router.get('/inventarios/:id', getInventarioById);
router.put('/inventarios/:id', updateInventario);
router.delete('/inventarios/:id', deleteInventario);

module.exports = router;
