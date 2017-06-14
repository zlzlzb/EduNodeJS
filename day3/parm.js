var http=require('http');
var fs=require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
	console.log(req.url);
	if(req.url==='/')
	{
		fs.readFile(__dirname+'/public/index.html',function(err,data){
			
			res.writeHead(200,{'Content-type':'text/html'});
			res.end("AAAAA"+data.toString());
			
			
		});
	}else{
		var urlObj = url.parse(req.url,true);
		console.dir(urlObj);
		if(urlObj.pathname==='/Login')
		{
			if(req.method=='GET')
			{
				res.writeHead(200,{'content-type':"text/html"});
				res.end("id : " + urlObj.query.id + " pwd : " + urlObj.query.pwd);
			}
			else if(req.method=='POST')
			{
				req.on('data',function(data){
					console.log('data : '+ data.toString());
					var parm = querystring.parse(data.toString());
					res.end("id : " + parm.id + " pwd : " + parm.pwd);
				});
			}
		}
		
	}
	
})
.listen(8888,function(){
	console.log("sever is reunning on 8888")	
});