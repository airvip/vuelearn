var koa = require('koa');
var route = require('koa-route');
var app = koa(); 

// console.log(controller);
// return;

app.use(route.get('/route_test',function*(){
	this.set('Cache-Control','no-cache');
	this.body = 'hello koa';
}));

app.listen(3001);
console.log('Koa server is started!');
