function plus(a,b,cb)
{
	var r = a+b;
	cb(r);
	
//	setTimeout(function(){cb(r)},0);
//	setImmediate(function(){cb(r)});
	process.nextTick(function(){cb(r);});
}

plus(10,20,function(r){
	
	console.log(r);	
	
});

