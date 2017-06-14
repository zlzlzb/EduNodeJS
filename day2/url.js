var url = require('url');

var querystring = require('querystring')

var urlStr="https://www.google.co.kr/search?q=nodejs&oq=nodejs&aqs=chrome..69i57j0j69i60l2j0l2.3383j0j8&sourceid=chrome&ie=UTF-8"
var urlObj = url.parse(urlStr,true);

console.log(urlObj);
console.log(urlObj.query);

var queryObj = querystring.parse(urlObj.query);
console.log(queryObj);

var urlStr2 = url.format(urlObj);
console.log(urlStr2);
console.log(querystring.stringify(queryObj));