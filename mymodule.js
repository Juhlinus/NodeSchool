var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {

	var extension = "." + ext;

	fs.readdir(dir, function(err, files) {

		if (err)
			return callback(err);

		var result = [];

		for (var i = 0; i < files.length; i++) {
			if (path.extname(files[i]) === extension)
				result.push(files[i]);
		}

		// Callback is the lambda function from the calling program
		callback(null, result);
	});
};