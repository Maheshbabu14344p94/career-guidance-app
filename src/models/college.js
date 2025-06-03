// src/models/college.js
const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  courses: [String],
  // add your fields here
}, { timestamps: true });

module.exports = mongoose.model('College', collegeSchema);
