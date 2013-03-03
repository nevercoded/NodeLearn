var http = require('http');
var url = require('url');
var logger = require('./modules/logger.js');

http.createServer(function (request, response) {

	request.on('end',function(){
		// Parse the request for arguments and store them in _get variable.
		// This function parses the url from request and returns object representation.
		var _get = url.parse(request.url, true).query;
		// Write headers to the response.
		response.writeHead(200, {
		 'Content-Type': 'text/plain'
		});
		// Send data and end response.
		if(_get['data'] != undefined){
			//response.end(request.host+" "+request.connection);
			response.end('Welcome to node.js on: ' + _get['data']);
		}else{
			response.end('Welcome to node.js on: ' + new Date());
		}
	});	
	logger.trace('createServer','Sent response');
  
}).listen(process.env.VMC_APP_PORT || 1337, null);
//.listen(8003, "127.0.0.1");
