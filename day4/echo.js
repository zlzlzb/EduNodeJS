var socketio = require('socket.io');
var express = require('express');
var http = require('http');

var app = express();
app.use(express.static(__dirname+'/public'));

var io = socketio(1234);


io.on('connection',function(socket){
	console.log('client conneted');
	socket.on('message',function(data){
		socket.emit('echo','echo:' +data);
		console.log('msg:'+data);
	});
	
});

http.createServer(app).listen(8888,function(){
		console.log('server running...');
	
});