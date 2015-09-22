var http = require('http');
var bl = require('bl');

var output = [];
var count = 0;

function getHttp(index) {

	http.get(process.argv[2 + index], function(response) {
	
		response.pipe(bl(
			function(err, data) {
				output[index] = data.toString();
			})
		);

		response.on('end', function(end) {
			count++;
			
			if (count === 3)
				for (var i = 0; i < output.length; i++)
					console.log(output[i]);
		});
	});
}

for (var i = 0; i < 3; i++) {
	getHttp(i);
}