//process.stdout.write("insert your name:");
//process.stdin.on('data',function(chunk)
//{
//		console.log(chunk.toString());
//});

var readline = require('readline');

var rl = readline.createInterface(process.stdin,process.stdout);

rl.question("what your name?:",function(answer){
	
	console.log(answer);
	rl.close();
});

rl.on('close',function(){
	
	process.exit(0);
});