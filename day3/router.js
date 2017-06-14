var http=require('http');
var express=require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/Login",function(req,res){
	var id= req.query.id;
	var pwd = req.query.pwd;
	
	res.send("<h1>GET</h1>"+"id : " + id + " pwd : " + pwd);
});

app.post("/Login",function(req,res){
	var id= req.body.id;
	var pwd = req.body.pwd;
	res.send("<h1>POST</h1>"+"id : " + id + " pwd : " + pwd);
});

app.get("/user/:id/:pwd",function(req,res){
	var id = req.params['id'];
	var pwd = req.params['pwd'];
	res.send("id : " + id + " pwd : " + pwd);
});


http.createServer(app).listen(9999,function(){
		console.log('server on 9999');
});

