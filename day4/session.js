var http=require('http');
var express = require('express');
var bodyparser = require ('body-parser');
var session = require('express-session');

var app = express();


app.use(session({secret:'asdf'}));

app.get('/',function(req,res){
	
	console.log('res.session',req.session);
	req.session.aaa = "1";
	res.send('this is /page')
});

app.get('/first',function(req,res){
	console.log('res.session',req.session);
	req.session.bbb = "2";
	req.session.destroy(function(){
		console.log('session destoryed');
	});
	res.send('this is /first');
});



app.get('/second',function(req,res){
	console.log('res.session',req.session);
	res.send('this is /second')
});

//http.createServer(app)
app.listen(8888,function(){
	console.log('server running on 8888');
});