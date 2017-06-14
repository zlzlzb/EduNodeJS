var net = require('net');
var readline = require('readline');
var server = net.createServer(function(socket){
	
	console.log('client connected.');
	
	socket.on('data',function(chunk){
		console.log('req : ',chunk.toString());
	});
	
	var ifs = readline.createInterface({input:socket});
	var isFirst = true;
	
	ifs.on('line',function(line)
	{
		var reqLine= "";
		
		if(isFirst)
		{
			isFirst = false;
			reqLine = line;
			console.log("req: " + reqLine);
		}

		var method = reqLine.split(" ")[0];
		var url = reqLine.split(" " )[1];
		
		if(url === "/")
		{
			
			socket.write("HTTP/1.1 200 OK\r\n");
			socket.write("Content-Type:text/html\r\n");
			socket.write("\r\n");
			socket.write("<html><body><H1>Welcome</H1></body></html>");
						
		}
		
		else
		{
			socket.write("HTTP/1.1 404 Notfound\r\n");
			socket.write("Content-Type:text/html\r\n");
			socket.write("\r\n");
			socket.write("<html><body><H1>Not Fuound</H1></body></html>");
		}

		socket.end();
//		socket.on('finish',function(){
//			socket.close();
//		});
	});
});
		


server.listen(8888,function(){
	console.log("server is running on 8888");	
});