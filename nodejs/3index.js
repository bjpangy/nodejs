var server = require("./3server_module");
var router = require("./3router.js");
var requesthandlers = require("./3requesthandler.js");

var handle = {};
handle["/"] = requesthandlers.start;
handle["/start"] = requesthandlers.start;
handle["/upload"] = requesthandlers.upload;

server.start(router.route,handle);
