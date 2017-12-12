var koa = require('koa');
var route = require('koa-route');
var app = koa(); 


var views = require('co-views');
var render = views('./view',{
	map:{html:'ejs'}
});
var koa_static = require('koa-static-server');
var service = require('./service/webAppService.js');

app.use(koa_static({
	rootDir:'./static/',
	rootPath:'/static/',
	maxage:0
}));

// console.log(controller);
// return;

app.use(route.get('/route_test',function*(){
	this.set('Cache-Control','no-cache');
	this.body = 'hello koa';
}));
app.use(route.get('/ejs_test',function*(){
	this.set('Cache-Control','no-cache');
	this.body = yield render('test',{title:'title_test'});
}));
app.use(route.get('/api_test',function*(){
	this.set('Cache-Control','no-cache');
	this.body = service.get_test_data();
}));
app.use(route.get('/ajax/search',function*(){
	this.set('Cache-Control','no-cache');
	var querystring = require('querystring');
	var params = querystring.parse(this.req._parsedUrl.query);
	var start = params.start;
	var end = params.end;
	var keyword = params.keyword;
	this.body = yield service.get_search_data(start,end,keyword);
}));











app.listen(3001);
console.log('Koa server is started!');
