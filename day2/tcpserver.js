var net = require('net');
var clients=[];

//var server = net.createServer();
//server.on('connection',function(socket){
net.createServer(function(socket){
	console.log('client has connected.', clients.length+1);
	
	clients.push(socket);
	
	
	socket.on('data',function(chunk){
		clients.forEach(function(el,idx){
			el.write(chunk.toString());	
		});
		console.log(chunk.toString());
		
	});
	
	socket.on('close',function(){
		console.log('socket closed');
		for(var i=0;i<clients.length;i++)
		{
			if(socket === clients[i])
			{
				clients.splice(i,1);
				break;
			}
		}
	});
	
	process.stdin.on('data',function(chunk){
		
		clients.forEach(function(el,idx){
			el.write(chunk.toString());	
		});
	
	});
	
}).listen(8888,function(){
	
	console.log("server is running");
});
/*
server.on('listening',function(){
	console.log('server is running...');
});

server.on('close',function(){
	console.log('server is closed');
});

server.on('error',function(){
	console.log('server error');
});

server.listen(9999,function(){
	
	console.log('lesten');
});*/