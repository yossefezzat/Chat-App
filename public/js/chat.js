
const socket = io();

socket.on('message', (message)=>{
    console.log(message);
});

document.querySelector('#message-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = e.target.elements.message.value;
    socket.emit('sendMessage',message);
});

document.querySelector("#location").addEventListener('click', (e)=> {
    e.preventDefault()
    if(!navigator.geolocation) return alert('unable to share your location');
    navigator.geolocation.getCurrentPosition((position)=> {
        socket.emit('location', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    });
})

