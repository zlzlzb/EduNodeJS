var net = require('net');

var socket = net.connect({host:'127.0.0.1',port:8888});
socket.on('connect',function(){
	console.log('connection success.');
	
	process.stdin.on('data',function(chunk){
		socket.write(chunk);
	});
	
});

socket.on('data',function(chunk){
	console.log('recv : ' , chunk.toString());
});

socket.on('end',function(){
	console.log('EOF');
});

socket.on('close',function(){
	console.log('soket closed');
});

socket.on('error',function(){
	console.log('error');	
});


