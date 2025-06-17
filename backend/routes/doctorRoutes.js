const express = require('express');
const router = express.Router();
const {
  getAllDoctors,
  addDoctor,
  updateDoctor,
  deleteDoctor
} = require('../controllers/doctorController');

// GET all doctors
router.get('/', getAllDoctors);

// POST new doctor
router.post('/', addDoctor);

// PUT update doctor
router.put('/:id', updateDoctor);

// DELETE doctor
router.delete('/:id', deleteDoctor);

module.exports = router;
