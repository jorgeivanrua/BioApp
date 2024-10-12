// /server/controllers/ticketController.js
const Ticket = require('../models/Ticket');

// Obtener todos los tickets
const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find().populate('usuario', 'nombre').populate('asignadoA', 'nombre');
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los tickets de soporte', error });
    }
};

// Crear un nuevo ticket
const createTicket = async (req, res) => {
    try {
        const nuevoTicket = new Ticket(req.body);
        await nuevoTicket.save();
        res.status(201).json(nuevoTicket);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el ticket', error });
    }
};

// Obtener un ticket por ID
const getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id).populate('usuario', 'nombre').populate('asignadoA', 'nombre');
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket no encontrado' });
        }
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el ticket', error });
    }
};

// Actualizar un ticket por ID
const updateTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket no encontrado' });
        }
        res.status(200).json(ticket);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el ticket', error });
    }
};

// Eliminar un ticket por ID
const deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket no encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el ticket', error });
    }
};

module.exports = {
    getTickets,
    createTicket,
    getTicketById,
    updateTicket,
    deleteTicket,
};
