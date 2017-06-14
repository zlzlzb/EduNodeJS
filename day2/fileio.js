var fs = require('fs');

var data = "Hello world";

fs.writeFile('./text.txt',data,'utf8',function(error){
	if(error)
	{	
		console.log("file write Error : ",error);
	
	}
	else
	{	console.log("file write success");
	
	}
		
});

try{
	fs.writeFileSync("./temp/text2.txt",data,"utf8");
	console.log("file write2 sucess");
} catch(error)
{
	console.log("file write2 Error : ",error);
}


