const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

router.post('/login', async (req, res) => {
  try {
    const { email } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin) {
      res.status(200).json(admin);
    } else {
      res.status(404).json({ error: 'Admin not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
