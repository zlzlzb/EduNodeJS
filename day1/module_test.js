var os = require('os');
var module1 = require("../module1.js");
var module2 = require("module2");

console.log(os.hostname());
console.log(os.type());


module1.fn();
module2.fn2();