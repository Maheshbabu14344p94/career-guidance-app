const express = require('express');
const router = express.Router();
const AptitudeQuestion = require('../models/aptitude');

// Add a new aptitude question
router.post('/add', async (req, res) => {
  try {
    const question = new AptitudeQuestion(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all aptitude questions
router.get('/', async (req, res) => {
  try {
    const questions = await AptitudeQuestion.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
