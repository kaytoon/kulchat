const socket = io()
$(document).ready(() => {
    socket.on('data', handleMsg)
})

function PostMessage() {
    
    var msg = document.getElementById('text_field').value
    
    if(msg != ''){
        socket.emit('data', msg)
        document.getElementById('text_field').value = ''
    }
    
}
function addRoom() {
    var name = document.getElementById('roomName').value
    console.log("room name is: "+name);
    document.getElementById('groupArea').innerHTML += ('<li><a>' + name + '</a></li></div>')
    document.getElementById('roomName').value = ''
    document.getElementById('description').value = ''
    $( '.modal-backdrop' ).hide();
        
}

function newMessage() {
    message = $(".message-input input").val();
    
	if($.trim(message) == '') {
		return false;
    }
	$('<ul>' + message + '</ul></div>'+'<div class="line" style="width:80%;">').appendTo($('.messages'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + message);
    $(".messages").animate({ scrollTop: $(document).height() }, 'fast');
    
};

$('.submit').click(function() {
    console.log("you are here")
  newMessage();
});

$(window).on('keydown', function(e) {
    console.log("you are here")
  if (e.which == 13) {
    newMessage();
    return false;
  }
});