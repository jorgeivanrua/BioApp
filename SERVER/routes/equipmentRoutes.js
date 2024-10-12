// SERVER/routes/equipmentRoutes.js

const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment'); // Asegúrate de tener un modelo de Equipment

// Obtener todos los equipos
router.get('/', async (req, res) => {
    try {
        const equipments = await Equipment.find();
        res.json(equipments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Registrar un nuevo equipo
router.post('/add', async (req, res) => {
    const equipment = new Equipment({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        estado: req.body.estado || 'Operativo',
        fechaAdquisicion: req.body.fechaAdquisicion,
        ubicacion: req.body.ubicacion,
        modelo: req.body.modelo,
        marca: req.body.marca,
        numeroSerie: req.body.numeroSerie,
        costo: req.body.costo,
        fechaUltimoMantenimiento:req.body.fechaUltimoMantenimiento,
        frecuenciaMantenimiento:req.body.frecuenciaMantenimiento,
        responsable:req.body.responsable,
        notasAdicionales:req.body.notasAdicionales,
        fechaInstalacion:req.body.fechaInstalacion,
        vidaUtilEstimada:req.body.vidaUtilEstimada,
        condicionesUso:req.body.condicionesUso,
        documentacionAsociada:req.body.documentacionAsociada,
        historialMantenimiento:req.body.historialMantenimiento || [],
        categoria:req.body.categoria,
        capacidadEspecificaciones:req.body.capacidadEspecificaciones,
        proveedor:req.body.proveedor,
        contactoProveedor:req.body.contactoProveedor,
        garantia:req.body.garantia,
        estadoFinanciero:req.body.estadoFinanciero
    });

    try {
        const newEquipment = await equipment.save();
        res.status(201).json(newEquipment);
    } catch (error) {
        res.status(400).json({ message:error.message });
    }
});

// Actualizar un equipo existente
router.put('/:id', async (req, res) => {
   try {
       const equipment = await Equipment.findById(req.params.id);
       if (!equipment) return res.status(404).json({ message:'Equipo no encontrado' });

       // Actualiza los campos necesarios
       equipment.nombre = req.body.nombre || equipment.nombre;
       equipment.descripcion = req.body.descripcion || equipment.descripcion;
       equipment.estado = req.body.estado || equipment.estado;
       equipment.fechaAdquisicion = req.body.fechaAdquisicion || equipment.fechaAdquisicion;
       equipment.ubicacion = req.body.ubicacion || equipment.ubicacion;
       equipment.modelo = req.body.modelo || equipment.modelo;
       equipment.marca = req.body.marca || equipment.marca;
       equipment.numeroSerie = req.body.numeroSerie || equipment.numeroSerie;
       equipment.costo = req.body.costo || equipment.costo;
       equipment.fechaUltimoMantenimiento=req.body.fechaUltimoMantenimiento || equipment.fechaUltimoMantenimiento;
       equipment.frecuenciaMantenimiento=req.body.frecuenciaMantenimiento || equipment.frecuenciaMantenimiento;
       equipment.responsable=req.body.responsable || equipment.responsable;
       equipment.notasAdicionales=req.body.notasAdicionales || equipment.notasAdicionales;
       equipment.fechaInstalacion=req.body.fechaInstalacion || equipment.fechaInstalacion;
       equipment.vidaUtilEstimada=req.body.vidaUtilEstimada || equipment.vidaUtilEstimada;
       equipment.condicionesUso=req.body.condicionesUso || equipment.condicionesUso;
       equipment.documentacionAsociada=req.body.documentacionAsociada || equipment.documentacionAsociada;

       // Actualiza el historial de mantenimiento si se proporciona
       if (req.body.historialMantenimiento) {
           equipment.historialMantenimiento.push(...req.body.historialMantenimiento);
       }

       // Otros campos
       equipment.categoria=req.body.categoria ||equipment.categoria;
       equipment.capacidadEspecificaciones=req.body.capacidadEspecificaciones ||equipment.capacidadEspecificaciones;
       equipment.proveedor=req.body.proveedor ||equipment.proveedor;
       equipment.contactoProveedor=req.body.contactoProveedor ||equipment.contactoProveedor;
       equipment.garantia=req.body.garantia ||equipment.garantia;
       equipment.estadoFinanciero=req.body.estadoFinanciero ||equipment.estadoFinanciero;

       const updatedEquipment= await equipment.save();
       res.json(updatedEquipment);
   } catch (error) {
       res.status(400).json({ message:error.message });
   }
});

// Eliminar un equipo
router.delete('/:id', async (req, res) => {
   try {
       const equipment = await Equipment.findById(req.params.id);
       if (!equipment) return res.status(404).json({ message:'Equipo no encontrado' });

       await equipment.remove();
       res.json({ message:'Equipo eliminado' });
   } catch (error) {
       res.status(500).json({ message:error.message });
   }
});

module.exports = router;
