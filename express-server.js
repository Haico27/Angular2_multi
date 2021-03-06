// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

//Set up socket.io
const io = require('socket.io')(server);

//initialize array of users who joined the chat
let connectedUsersList = [];




//a socket fires a 'connection'-event
io.on('connection', function(socket){
  if (typeof socket.handshake.query.userName != "undefined") {
    console.log("socket.handshake.query.userName in server: ", socket.handshake.query.userName)

    //initialize the connectedUsersList when a socket connects
    connectedUsersList.push(socket.handshake.query.userName)

    //emits an updateSocketList-event to display the updated list of connected sockets
    io.emit("updateSocketList", connectedUsersList)

    //emits an addUserToSocketList-event for displaying a message that a new user joined the chat
    io.emit("addUserToSocketList", socket.handshake.query.userName)
  }

  //listen for chat messages
  socket.on('chat message', function(message){
    console.log('message from server:', message)
    io.emit('chat message', message)
  })



  socket.on('disconnect', function(){
    console.log("user disconnected: ", socket.handshake.query.userName)
    let name = socket.handshake.query.userName;
    let index = connectedUsersList.indexOf(name)
    if (index != -1) {
      connectedUsersList.splice(index, 1)
      io.emit("updateSocketList", connectedUsersList)
      io.emit("removeUserFromSocketList", name)
    }
  })
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);



/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
