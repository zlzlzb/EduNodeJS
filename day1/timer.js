function callback2(){
	
	console.log("callback2!!");
}

var timer2 = setTimeout(callback2,5000);
clearTimeout(timer2);

var cnt = 0;
function callback(){
	
	console.log("hello");

	cnt++;
	
	if(cnt>5) clearInterval(timer);
	
}

var timer = setInterval(callback,3000);




//console.log(timer);