var http=require('http');
var server = http.createServer(function(request,response){
	
	console.log('request, url : %s, method:%s',request.url,request.method);
	//console.dir(request);
	
	if(request.url==="/")
	{
		response.writeHead(200,{"Content-type" : "text/html"});
		response.write("<html><body><h1>Welcome!!!!!!!!!!!</h1></body></html>");
		
		
	}
	
	else
	{
		response.writeHead(404,{"Content-type" : "text/html"});
		response.write("<html><body><h1>not Found</h1></body></html>");
	}
	
	response.end;
});


server.listen(8888,function(){
	console.log('listening');
});