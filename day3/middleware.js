var http = require('http');
var express = require('express');

var app=express();

function logging(req,res,next)
{
	console.log(req.url);
	next();
}app.use(logging);

function fn(req,res,next)
{
	res.send("<html><body><h1>Welcome!</h1></body></html>");
	next();
}
function fn2(req,res,next)
{
	console.log("last");
}


//app.use(logging);
app.use(fn);
app.use(fn2);

http.createServer(app).listen(9999,function(){
	console.log("server on 9999");
});