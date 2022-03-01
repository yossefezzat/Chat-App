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
    socket.on('sendMessage', (message) => {
        io.emit('message', message);
    });
});

server.listen(port, ()=>{
    console.log(`server up at port ${port}`);
})





