var cnt = 0;
var timer1 = setInterval(function()
		{
			console.log(cnt);
			cnt++;
			
			if(cnt>10)
				clearTimeout(timer1);
		}

,500);


for(var i=0;i<=10;i++)
{
	(function(x){
		//var x = i;
		setTimeout(function(){
			console.log(x);
		},500*i);
		
	})(i);
		
}