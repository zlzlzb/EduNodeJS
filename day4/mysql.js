var mysql = require('mysql');

var conn = mysql.createConnection({
		host:'127.0.0.1',
		user:'root',
		password:'admin',
		database:'test'});

conn.connect(function(err){
	console.log('connected...');
});

conn.query("select * from board",function(err,result,field){
	
		console.log(arguments);
		for(var i=0;i<result.length;i++)
		{
				console.log(result[i]._id,
						result[i].title,
						result[i].content,
						result[i].writer);
							
		}
		
});

//conn.query('delete from board where _id=?',[2],function(err,result,field){
//		console.log(arguments);
//});