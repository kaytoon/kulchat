const socket = io()
$(document).ready(() => {
    socket.on('data', handleMsg)
    
})

function handleMsg(msg) {
    console.log("this is the value "+document.getElementById('text_field').value);
    
        document.getElementById('messages').innerHTML += ('<ul>' + msg + '</ul></div>'+'<div class="line" style="width:80%;">')
        
}

function PostMessage() {
    
    var msg = document.getElementById('text_field').value
    
    if(msg != ''){
        socket.emit('data', msg)
        document.getElementById('text_field').value = ''
        
            if ( $("#content").css('display') == '79%' ){
                $("#content").css({"height":"auto", "overflow-y":"scroll"}); 
            }else{
                $("#content").css({"height":"", "overflow-y":""});
            }
    }
    
}
clearFormFields = function(area) {
    $(area).find('input[type="text"],input[type="email"],textarea,select').val('');
  };
function addRoom() {
    var name = document.getElementById('roomName').value
    console.log("room name is: "+name);
    document.getElementById('groupArea').innerHTML += ('<li><a>' + name + '</a></li></div>')
    document.getElementById('roomName').value = ''
    document.getElementById('description').value = ''
    $( '.modal-backdrop' ).hide();
        
}