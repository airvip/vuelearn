var koa = require('koa');
var route = require('koa-route');
var app = koa(); 


var views = require('co-views');
var render = views('./view',{
	map:{html:'ejs'}
});


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

app.listen(3001);
console.log('Koa server is started!');
