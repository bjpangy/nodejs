http = require("http");
url = require("url");

function start(route,handle){
	function onRequest(request,response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		request.setEncoding("utf8");

		request.addListener("data",function(postDataChunk){
			postData += postDataChunk;
		});
		
		request.addListener("end",function(){
		route(handle,pathname,response,postData);
		});
	};

	http.createServer(onRequest).listen(8000);
	console.log("Server has started on port 8000");
}

exports.start = start;
