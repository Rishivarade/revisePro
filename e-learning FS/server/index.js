const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000','http://localhost:5173'],
    credentials: true
  }));



// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => console.log('Server running'));
  })
  .catch(err => console.error(err));
