const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: String,
  date: String,
  time: String,
  userName: String,
  userEmail: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);