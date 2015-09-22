var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {
	
	var length = 0;
	var output;

	response.pipe(bl(
		function(err, data) {
			output = data.toString();
		})
	);

	response.on('data', function(data) {
		length += data.toString().length;
	});

	response.on('end', function(end) {
		console.log(length);
		console.log(output);
	});
});