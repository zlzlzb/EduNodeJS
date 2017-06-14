var net = require('net');
var socket = net.connect({host:'www.naver.com',port:80});

socket.on('connect',function(){
	console.log('connected.');
	
	socket.write('GET /index.html HTTPl/1.1\r\n');
	socket.write('Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36\r\n');
	socket.end('\r\n');
});

socket.on('data',function(data){
	console.log(data.toString());
}); 