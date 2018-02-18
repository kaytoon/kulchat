const socket = io()
$(document).ready(() => {
    socket.on('data', handleMsg)
})

function handleMsg(msg) {
    console.log(msg)
    document.getElementById('messages').innerHTML += ('<ul>' + msg + '</ul>')
}

function PostMessage() {
    console.log("button was pressed")
    var msg = document.getElementById('text_field').value
    socket.emit('data', msg)
}