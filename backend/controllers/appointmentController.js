const Appointment = require('../models/Appointment');

// POST /api/appointments
const bookAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to book appointment' });
  }
};

// GET /api/appointments
const getAppointments = async (req, res) => {
  const { doctorId, date } = req.query;

  try {
    if (doctorId && date) {
      const appointments = await Appointment.find({ doctorId, date });
      return res.status(200).json(appointments);
    }

    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch appointments' });
  }
};

// DELETE /api/appointments/:id
const cancelAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    await Appointment.findByIdAndDelete(appointmentId);
    res.status(200).json({ message: 'Appointment canceled successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to cancel appointment' });
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
  cancelAppointment,
};



