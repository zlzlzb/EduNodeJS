var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();


var server = http.createServer(app);

//var io = socketio(8888);
var io = socketio(server);

io.on('connection',function(socket){
		socket.on('elsa',function(data){
				console.log(data);
				socket.emit('anna','Go away anna');
		});
});

app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
	
	res.redirect('/socketio.html');
});


server.listen(9999,function(){
		console.log('server on 9999');
});