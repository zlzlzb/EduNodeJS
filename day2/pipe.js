var fs = require('fs');

var input = fs.createReadStream('./out.txt');

input.pipe(process.stdout);