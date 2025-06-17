const express = require('express');
const multer = require('multer');
const JobApplication = require('../models/JobApplication');

const router = express.Router();

// Конфигурација за локално снимање на CV
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// POST /api/applications
router.post('/', upload.single('cv'), async (req, res) => {
  const { fullName, email, position, message } = req.body;
  const cvFile = req.file;

  console.log('✅ Новa апликација:');
  console.log({ fullName, email, position, message });
  console.log('📎 CV:', cvFile?.originalname);

  try {
    const application = new JobApplication({
      fullName,
      email,
      position,
      message,
      cvFileName: cvFile?.filename || ''
    });

    await application.save();
    return res.status(200).json({ message: 'Application received and saved to database' });
  } catch (error) {
    console.error('❌ Error saving application:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
