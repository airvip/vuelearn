var fs = require('fs');

exports.get_index_data = function(){
	var content = fs.readFileSync('./mock/channel/index.json','utf-8');
	return content;
}

exports.get_test_data = function(){
	var content = fs.readFileSync('./mock/test.json','utf-8');
	return content;
}


exports.get_search_data = function(start,end,keyword){
	return function(cb){
		var http = require('http');
		var qs = require('querystring');
		var data = {
			s:keyword,
			start:start,
			end:end
		};
		var content = qs.stringify(data);
		var http_request = {
			hostname:'dushu.xiaomi.com',
			port:80,
			path:'/store/v0/lib/query/onebox?'+content
		}
		req_obj = http.request(http_request,function(_res){
			var content = '';
			//console.log(http_request);
			_res.setEncoding('utf8');
			_res.on('data',function(chunk){
				content += chunk;
				//console.log(content);
			});
			_res.on('end',function(){
				cb(null,content);
			});
		});
		req_obj.on('error',function(e){
			console.log(e);
		});
		req_obj.end();
	}
}