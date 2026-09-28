require('dotenv').config();
const express = require('express');
const connectDB = require('../Mission-5/db.js');
const movieRoutes = require('./movieRoutes.js');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use('/api/movies', movieRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
