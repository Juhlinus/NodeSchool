var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
	
	if (err)
		throw err;

	var str = data.toString();
	
	str = str.split('\n');

	console.log(str.length - 1);	
});