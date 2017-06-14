var http=require('http');

var fs=require('fs');

var server = http.createServer(function(request,response){
	
	console.log('request, url : %s, method:%s',request.url,request.method);
	//console.dir(request);
	
	
	var path = __dirname +'/public' +request.url; 
	
	if(request.url==='/')
	{
		path=__dirname+'/public/index.html';
	}
	
	fs.readFile(path,'utf8',function(error,data){
		
		if(error)
		{
			response.writeHead(404,{"Content-type" : "text/html"});
			response.end("<html><body><h1>not Found</h1></body></html>");
		}
		
		else
		{
			response.writeHead(200,{"Content-type" : "text/html"});
			response.end(data);
		}
		
		//response.end;
	});
	
});


server.listen(8888,function(){
	console.log('listening');
});