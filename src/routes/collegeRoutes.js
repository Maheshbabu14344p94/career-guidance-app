const express = require('express');
const router = express.Router();
const College = require('../models/college');

// Register college
router.post('/register', async (req, res) => {
  try {
    const college = new College(req.body);
    await college.save();
    res.status(201).json(college);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all colleges
router.get('/', async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
