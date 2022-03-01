const socket = io();

socket.on('countUpdated', (count)=>{
    console.log('count updated', count);
})

document.querySelector("#increment").addEventListener('click', ()=>{
    console.log('button cilicked');
    socket.emit('increment');
})