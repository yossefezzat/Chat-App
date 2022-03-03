const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const express = require('express');

const app = express();
const server = http.createServer(app); 
const io = socketio(server);

const port = process.env.PORT || 3000;
const directoryPath = path.join(__dirname, '../public');

app.use(express.static(directoryPath));

io.on('connection', (socket)=>{
    console.log('welcome !');

    socket.emit('message', 'welcome!');
    socket.broadcast.emit('message', 'new User has Joined');

    socket.on('sendMessage', (message) => {
        io.emit('message', message);
    });
    
    socket.on('location', (location)=>{
        io.emit('message', `https://google.com/maps?q=${location.latitude},${location.longitude}`);
    })

    socket.on('disconnect', ()=>{
        io.emit('message', 'A user has left!');
    });

});

server.listen(port, ()=>{
    console.log(`server up at port ${port}`);
})





