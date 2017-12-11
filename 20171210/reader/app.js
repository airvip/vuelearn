var koa = require('koa');
var router = require('koa-router');
var app = koa(); 

// console.log(controller);
// return;

app.use(router.get('/route_test',function*(){
	this.set('Cache-Control','no-cache');
	this.body = 'hello koa';
}));

app.listen(3001);
console.log('Koa server is started!');
