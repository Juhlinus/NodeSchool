var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {

	request.on('data', function(data) {
		if (request.method === "POST")
			response.write(data.toString().toUpperCase());
	});
	
	// When the entire request has been handled
	// end the response
	request.on('end', function() {
		response.end();
	});
	
});

server.listen(process.argv[2]);