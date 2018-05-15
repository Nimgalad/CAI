var http = require('http');

//Create a server object:

http.createServer(function(req,res) {
	res.write('Hello World!'); //Write a response to the client
	res.end();	//End the response
}).listen(8080); //The server object listens to port 8080