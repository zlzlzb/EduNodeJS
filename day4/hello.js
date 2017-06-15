var addon = require('./build/Release/hello');

console.log(addon.prop);
console.log(addon.method());
console.log("addon.add(3,5):" + addon.add(3,5));

addon.callback(function(msg){
    console.log(msg);
});

var obj = addon.createObject("hello node" );
console.log(obj.msg);

