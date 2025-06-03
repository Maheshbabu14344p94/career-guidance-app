// src/models/student.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  name: String,
  email: String,
  mobile: String,
  location: String,
  interests: [String],
  score: Number
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
