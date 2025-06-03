const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// API Routes
try {
  app.use('/api/student', require('./routes/studentRoutes'));
  app.use('/api/admin', require('./routes/adminRoutes'));
  app.use('/api/college', require('./routes/collegeRoutes'));
  app.use('/api/questions', require('./routes/questionRoutes'));
  app.use('/api/aptitude', require('./routes/aptitudeRoutes'));

  // Make sure filename casing matches exactly
  app.use('/api/auth', require('./routes/authroutes')); // <-- Capital R in 'authRoutes'

} catch (err) {
  console.error("❌ Route setup error:", err);
}

// Wildcard route for frontend (must be last route)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
