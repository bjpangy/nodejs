var exec = require("child_process").exec;

function start(response,postData){
	console.log("starting...");
	
	var body = '<html>' +
		   '<head>' +
		   '<meta http-equiv="content-Type" content="text/html; ' +
		   'charset=UTF-8" />' + 
		   '</head>' + 
		   '<body>' +
		   '<form action="/upload" method="post">' + 
		   '<textarea name="text" rows="20" cols="60"></textarea>' + 
		   '<input type="submit" value="Submit text" />' +
		   '</form>'+
		   '</body>'+
		   '</html>'
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write(body);
		response.end();
};
function upload(response,postData){
	console.log("uploading...");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Uploading...");
	response.write(postData);
	response.end();
};

exports.start = start;
exports.upload = upload;
