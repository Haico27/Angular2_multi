const express = require('express');
const router = express.Router();

const destinations = [
      { id: 0, name: 'Serengeti', country: 'Tanzania' },
      { id: 11, name: 'Ganesh Talai', country: 'India' },
      { id: 12, name: 'Melbourne', country: 'Australia' },
      { id: 13, name: 'Tel Aviv', country: 'Israel' },
      { id: 14, name: 'Istanbul', country: 'Turkey' },
      { id: 15, name: 'San Francisco', country: 'United States' },
      { id: 16, name: 'Lausanne', country: 'Switzerland' },
      { id: 17, name: 'Berlin', country: 'Germany' }
    ];

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/destinations', (req, res) => {
  res.send(JSON.stringify(destinations))
})

module.exports = router;
