//var calc = require("./calc.js");

//var r = calc.plus(10,20);

var cal= require("./calc.js");
var plus = cal.plus;
var m = cal.m;


console.log("result :",m(10,20));
console.log("result :",plus(10,20));
