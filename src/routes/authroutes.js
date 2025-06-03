const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const path = require('path');

const serviceAccount = require(path.join(__dirname, '../firebase-adminsdk.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

router.post('/verifyToken', async (req, res) => {
  const idToken = req.body.idToken;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    res.status(200).json({ uid: decodedToken.uid });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;
