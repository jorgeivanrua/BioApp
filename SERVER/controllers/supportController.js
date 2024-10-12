// /server/controllers/supportController.js
const SupportTicket = require('../models/SupportTicket');

// Obtener todos los tickets de soporte
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await SupportTicket.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los tickets' });
  }
};

// Crear un nuevo ticket de soporte
exports.createTicket = async (req, res) => {
  const newTicket = new SupportTicket(req.body);
  try {
    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el ticket' });
  }
};

// Obtener un ticket de soporte por ID
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await SupportTicket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket no encontrado' });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el ticket' });
  }
};

// Actualizar un ticket de soporte por ID
exports.updateTicket = async (req, res) => {
  try {
    const updatedTicket = await SupportTicket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTicket) return res.status(404).json({ message: 'Ticket no encontrado' });
    res.json(updatedTicket);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el ticket' });
  }
};

// Eliminar un ticket de soporte por ID
exports.deleteTicket = async (req, res) => {
  try {
    const deletedTicket = await SupportTicket.findByIdAndDelete(req.params.id);
    if (!deletedTicket) return res.status(404).json({ message: 'Ticket no encontrado' });
    res.json({ message: 'Ticket eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el ticket' });
  }
};
