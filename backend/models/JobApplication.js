const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  position: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  cvFileName: {
    type: String
  },
  appliedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);
