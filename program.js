var net = require('net');

var server = net.createServer(function(socket) {

	var date = new Date();

	var data = date.getFullYear() + '-' + 
		(date.getMonth() < 10 ? 
		'0' + (date.getMonth() + 1) : 
		(date.getMonth() + 1)) + '-' + date.getDate() +
		' ' + date.getHours() + ':' + 
		(date.getMinutes() < 10 ? '0' + date.getMinutes() :
		date.getMinutes());

	socket.write(data + '\n');

	socket.end();
});

server.listen(process.argv[2]);