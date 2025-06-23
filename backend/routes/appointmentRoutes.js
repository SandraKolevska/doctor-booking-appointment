const express = require('express');
const router = express.Router();
const { bookAppointment, getAppointments, cancelAppointment } = require('../controllers/appointmentController');

// POST /api/appointments
router.post('/', bookAppointment);

// GET /api/appointments
router.get('/', getAppointments);

// DELETE /api/appointments/:id
router.delete('/:id', cancelAppointment);

module.exports = router;



