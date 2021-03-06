var fs = require('fs');

console.log("stdout : console.log");
console.error("stderr : console.err");

console.info("stdout : console.info");
console.warn("stderr : console.warn");

var logger = new console.Console(
		fs.createWriteStream("./log.txt"),
		fs.createWriteStream("./err.txt")
);

logger.log("this is log");
logger.error("this is err");
logger.info("this is info");
logger.warn("this is warn");

console.trace('trace');
console.dir({name:"lee",age:29});
console.dir(fs);

//var start = new Date().getTime();
console.time("loop");
for(var i=0;i<1000;i++)
{
	console.log(i);
}

//console.log (new Date().getTime() - start);
console.timeEnd("loop");

var x = 10;
console.assert(x===10,'OK');
//console.assert(x===100,'Fail');
