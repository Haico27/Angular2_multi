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
let onlineUsers = [];



//a socket fires a 'connection'-event
io.on('connection', function(socket){

  //listen for users joining the chat
  socket.on('newUser', function(name){
    const user = name;
    console.log('user who joined the chat: ', user)
    console.log(user, ' connected to chat');


    if ( onlineUsers.length === 0 ) {
      console.log("in if statement: ", (onlineUsers.length === 0))
      onlineUsers.push(user)
    } else {
      console.log("onlineUsers.name: ", onlineUsers.includes(user))
      onlineUsers.includes(user) ? onlineUsers : onlineUsers.push(user)
    //   for (let i = 0; i < onlineUsers.length; i++) {
    //     console.log("user.name != onlineUsers[i].name: ", (user.name != onlineUsers[i].name))
    //     if (user.name == onlineUsers[i].name) {
    //       console.log("if statement executed")
    //       break;
    //     } else {
    //       onlineUsers.push(user)
    //     }
    //   }
    }


    console.log("online users array in server after push: ", onlineUsers)
    io.emit('hi', user)
    io.emit('online users list', onlineUsers)
  })



  //listens for users disconnecting
  socket.on('dc', function(user){
    socket.disconnect()
  })



  //listen for chat messages
  socket.on('chat message', function(message){
    console.log('message from server:', message)
    io.emit('chat message', message)
  })


  socket.on('disconnect', function(name){
    console.log("user left the chat")
  });
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

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
