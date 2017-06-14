var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

http.createServer(function(req,res){
	
	fs.readFile('template.html','utf8',function(err,data){
		
		console.log(data);
		debugger;
		var html = ejs.render(data,{name:"Lee", age:27});
		console.log(html);
		
		res.writeHead(200,{"Content-type":"text/html"});
		res.end(html);
		
		
	});
	
}).listen(8888,function(){
	console.log('server is running on 8888');
});