var readline = require('readline');
var fs = require('fs');
var readline = require('readline');
var filename = process.argv[2];

var rl = readline.createInterface(process.stdin,process.stdout);




var writer = fs.createWriteStream(filename);

rl.on('line',function(line){
	
	if(line != 'exit')
		writer.write(line+'\n');
	else
		writer.end();
		
});	
writer.on('finish',function(){
	
	process.exit(1);
});


