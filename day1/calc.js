console.log("calc.js is loading...");

function plus(i,j)
{
	return i+j;
}
function m(i,j)
{
	return i-j;
}


//exports.plus = plus;
//module.exports = plus;
module.exports={plus,m};

//console.dir(module);