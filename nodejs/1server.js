http = require("http");

function onRequest(request,response){
	console.log("new request");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello world");
	response.end();
};

http.createServer(onRequest).listen(8000);
console.log("Server has started on port 8000");
