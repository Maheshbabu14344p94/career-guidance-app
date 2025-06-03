// src/models/aptitude.js
const mongoose = require('mongoose');

const aptitudeSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [String],
  correctAnswer: String,
  // Add other fields you need for aptitude questions
}, { timestamps: true });

module.exports = mongoose.model('Aptitude', aptitudeSchema);
