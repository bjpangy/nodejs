var server = require("./4server");
var router = require("./4router.js");
var requesthandlers = require("./4requesthandler.js");

var handle = {};
handle["/"] = requesthandlers.start;
handle["/start"] = requesthandlers.start;
handle["/upload"] = requesthandlers.upload;

server.start(router.route,handle);
