var util=require('util');
var EventEmitter=require('events');
//
////var emitter = new event.EventEmitter();
//var emitter = new event();
//emitter.on('custom',function(){
//	
//		console.log('event occurred');
//});
//
//emitter.emit('custom');

function MyStream()
{
	EventEmitter.call(this);
	
}

util.inherits(MyStream,EventEmitter);

MyStream.prototype.write = function(data){
	
		this.emit('data',data);
}

var stream = new MyStream();
stream.on('data',function(data){
	
	console.log("received:",data);
});

stream.write("It works!!");
