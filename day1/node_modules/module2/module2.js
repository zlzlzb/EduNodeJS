var fn3=require("./fn3.js");
console.log("module2 loading..");
exports.fn2 = function()
{
	console.log("this is module2.index fn2()...");
	fn3();
}
if(require.main==module)
{
	exports.fn2();
}