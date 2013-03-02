var http = require('http');
var logger = require('./modules/logger.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Node from SU..');
  logger.trace('createServer','Sent response');
}).listen(process.env.VMC_APP_PORT || 1337, null);
//.listen(8003, "127.0.0.1");
