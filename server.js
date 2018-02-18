var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/js/:filename', function(req, res){
  const file = req.params.filename
  console.log(req.params)
  console.log(req.params.filename)
  res.sendFile(__dirname + '/js/'+file)
})
app.get('/css/:filename', function(req, res){
  const file = req.params.filename
  res.sendFile(__dirname + '/css/'+file)
})

io.on('connection', client => {
  client.join('all')
  console.log("A user connected")

  client.on('data', msg => {
    console.log('Message recieved: ' + msg)
    io.to('all').emit('data', msg)
  })

  client.on('disconnect', () => {
    console.log('user disconnected');
  })
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});