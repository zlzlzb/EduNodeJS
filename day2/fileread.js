var fs = require('fs');

fs.readFile("./text.txt",'utf8',function(error,data){
	if(error)
		console.log("file read error");
	else
		console.log(data);
});

try{
var data =fs.readFileSync("./text.txt",'utf8');
	console.log(data);
}catch(error)
{
	console.log(error);
}

fs.readdir('./',function(err,list){
	if(err){
		console.log('err');
	}
	else
	{
		console.log(list);
	}
	
});