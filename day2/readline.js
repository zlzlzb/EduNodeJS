var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
	
		input:fs.createReadStream('out.txt')
});

var cnt=1;
rl.on('line',function(line) {
	
	console.log(cnt++ +':' + line)
})