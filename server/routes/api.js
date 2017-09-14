const express = require('express');
const router = express.Router();

// Get database
const mysql = require('mysql');
function getConnection() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'multi_purpose_data'
  });
  return connection;
}

// const destinations = [
//       { id: 0, name: 'Serengeti', country: 'Tanzania' },
//       { id: 11, name: 'Ganesh Talai', country: 'India' },
//       { id: 12, name: 'Melbourne', country: 'Australia' },
//       { id: 13, name: 'Tel Aviv', country: 'Israel' },
//       { id: 14, name: 'Istanbul', country: 'Turkey' },
//       { id: 15, name: 'San Francisco', country: 'United States' },
//       { id: 16, name: 'Lausanne', country: 'Switzerland' },
//       { id: 17, name: 'Berlin', country: 'Germany' }
//     ];

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/destinations', (req, res) => {
  const connection = getConnection();
  connection.connect();
  connection.query('SELECT * from destinations order by id asc', function(err, rows, fields) {
    if (!err) {
      console.log(rows);
      res.send(JSON.stringify(rows));
    } else {
      console.log('Error while performing Query');
    }
  });
  connection.end();
})

module.exports = router;
