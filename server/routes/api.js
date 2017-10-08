const express = require('express');
const router = express.Router();

// Get database connection
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

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

//GET destinations from database
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

//POST destination in database
router.post('/destination', function(req, res) {
  const connection = getConnection();
  connection.connect();
  const newDestination = { name: req.body.name, country: req.body.country, imageUrl: req.body.imageUrl };
  console.log('in server: ', req.body)
  console.log('req.headers in server: ', req.headers)
  connection.query('INSERT INTO destinations SET ?', newDestination, function( err, result ) {
    console.log('added ' + newDestination);
    res.status(200).end();
  });
  connection.end();
});

//POST user in database
router.post('/register', function(req, res) {
  const connection = getConnection();
  connection.connect();
  const newUser = { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: req.body.password };
  console.log('in server: ', req.body)
  console.log('req.headers in server: ', req.headers)
  connection.query('INSERT INTO users SET ?', newUser, function( err, result ) {
    console.log('added ' + newUser);
    res.status(200).end();
  });
  connection.end();
});

//POST request for login functionality
router.post('/authenticate', function(req, res) {
  const connection = getConnection();
  connection.connect();
  var credentials = [req.body.email, req.body.password];
  connection.query("SELECT id, firstName, lastName, email FROM users WHERE email = ? AND password = ?", credentials, function(err, result) {
    console.log("result in server: ", result)
    res.send(result);
    res.status(200).end();
  });
  connection.end();
})



module.exports = router;
