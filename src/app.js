const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// API Routes
app.use('/api/student', require('./routes/studentRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/college', require('./routes/collegeRoutes'));
app.use('/api/aptitude', require('./routes/aptitudeRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Serve specific HTML files if needed (optional but clearer)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/colleges.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/colleges.html'));
});

app.get('/scores.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/scores.html'));
});

app.get('/student-login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/student-login.html'));
});

// Remove or comment out the wildcard catch-all route
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../public/index.html'));
// });

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
