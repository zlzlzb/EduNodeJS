var http=require('http');
var express=require('express');
var bodyParser = require('body-parser');
//var ejs = require('ejs');
var fs = require('fs');
var app = express();

app.set("views",__dirname+"/template");
app.set("view engine","ejs");

app.get('/first.html',function(req,res){
	
	//res.sendFile(__dirname+'/public/index.html');
	res.redirect('/next.html');
});


app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/Login",function(req,res){
	var id= req.query.id;
	var pwd = req.query.pwd;
	
//		fs.readFile(__dirname+"template/login.html",'utf8',function(err,data){
//		var html = ejs.render(data,{id:id, pwd:pwd});
//		res.send(html);
//	
//		});		
		
	res.render("login",{id:id,pwd:pwd});

	
	//res.send("<h1>GET</h1>"+"id : " + id + " pwd : " + pwd);
});

app.post("/Login",function(req,res){
	var id= req.body.id;
	var pwd = req.body.pwd;
	//res.send("<h1>POST</h1>"+"id : " + id + " pwd : " + pwd);
	
	res.render("login",{id:id,pwd:pwd});
});

app.get("/user/:id/:pwd",function(req,res){
	var id = req.params['id'];
	var pwd = req.params['pwd'];
	res.send("id : " + id + " pwd : " + pwd);
});

app.get('/1st.html',function(req,res){
	
	res.sendFile(__dirname+'/public/first.html');
});


http.createServer(app).listen(9999,function(){
		console.log('server on 9999');
});

