var http=require('http');
var express=require('express');
var morgan = require('morgan');
var app = express();

var logger = morgan('tiny');

var statics =express.static(__dirname+"/public");

app.use(logger);
app.use(statics);



http.createServer(app).listen(9999,function(){
		console.log('server on 9999');
});

