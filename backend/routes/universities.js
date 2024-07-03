const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { country } = req.query;
  let url = `http://universities.hipolabs.com/search?country=${country}`;
  
  try {
    const response = await axios.get(url);
    res.json(response.data);
    // console.log(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
