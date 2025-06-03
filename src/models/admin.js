// src/models/admin.js

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  uid: { type: String, required: true }, // Firebase UID
  name: String,
  email: { type: String, required: true, unique: true },
  role: { type: String, default: 'admin' }
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
