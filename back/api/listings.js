const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); 

router.get('/', async (req, res) => {
  const url = "https://us-real-estate-listings.p.rapidapi.com/for-sale?location=Los+Angeles%2C+CA&offset=0&limit=10&sort=relevance&days_on=1&expand_search_radius=1";

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('RapidAPI fetch failed:', err);
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
});

module.exports = router;
