var mongojs = require('mongojs');

var db = mongojs('127.0.0.1/test',['board']);


db.board.insert({_id:4,title:'asdfa',content:'asdfcont',writer:'aaaaa'});
db.board.find(function(err,docs){
	console.log(arguments);
	for(var i=0;i<docs.length;i++)
		{
			console.log(docs[i]._id, docs[i].title, docs[i].content,docs[i].writer);
			
		
		}
});


