var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {

	// Check method
	if (request.method == 'GET') 
	{
		response.writeHead('200', { 'Content-Type': 
							'application/json' });

		var parsedRequest = url.parse(request.url, true);
		var date = new Date(parsedRequest.query['iso']);

		if (parsedRequest.pathname == '/api/parsetime')
		{
			date = '{"hour":' + date.getHours() +
					',"minute":' + date.getMinutes() +
					',"second":' + date.getSeconds() + '}';
		}
		else if (parsedRequest.pathname == '/api/unixtime') 
		{
			date = '{"unixtime":' + 
					Date.parse(date.toISOString()) + '}';
		}

		response.end(date);
	}
});

server.listen(process.argv[2]);