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

let count = 1;
io.on('connection', (socket)=>{
    socket.emit('countUpdated', count);
    socket.on('increment', ()=>{
        count++;
        io.emit('countUpdated', count);
    })
});

server.listen(port, ()=>{
    console.log(`server up at port ${port}`);
})





