var fs = require("fs");

var input = fs.createReadStream('./quiz2.js');
input.setEncoding("utf8");
input.on('data',function(chunk){
	console.log("read : ",chunk);
});