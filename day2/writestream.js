var fs = require('fs');

var writer = fs.createWriteStream('./out.txt');

for(var i=0;i<100;i++)
{
		var r = writer.write('hello,#'+i+'\n');
		console.log(r);
}

writer.end('this is end of file.');
writer.on('finish',function(){
	
	console.log('all writes ar completed.');
	
});