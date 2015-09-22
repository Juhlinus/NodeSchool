var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {

	var readStream = fs.createReadStream(process.argv[3]);

	// When the entire strea is read
	readStream.on('open', function() {
		// Feed (Pipe) stream to response
		readStream.pipe(response);
	});
});

server.listen(process.argv[2]);