const Doctor = require('../models/Doctor');

// GET /api/doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/doctors
const addDoctor = async (req, res) => {
  const { name, specialization, email } = req.body;
  try {
    const doctor = new Doctor({ name, specialization, email });
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/doctors/:id
const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const { name, specialization, email } = req.body;
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      id,
      { name, specialization, email },
      { new: true }
    );
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/doctors/:id
const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findByIdAndDelete(id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllDoctors,
  addDoctor,
  updateDoctor,
  deleteDoctor
};
