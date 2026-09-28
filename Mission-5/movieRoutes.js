const express = require('express');
const router = express.Router();
const Movie = require('./Movie.js');

router.get('/high-rated', async (req, res) => {
  try {
    const highRatedMovies = await Movie.find({ rating: { $gt: 8 } });
    res.status(200).json({
      success: true,
      count: highRatedMovies.length,
      data: highRatedMovies
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
