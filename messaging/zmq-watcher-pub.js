/*
 	Using the zmq module, we create a publisher endpoint

*/

"use strict";

const fs = require("fs"),
	  zmq = require("zmq"),
	  //create publisher endpoint
	  publisher = zmq.socket("pub"),
	  filename = process.argv[2];
//just one call to fs.watch for all clients in a file-system watcher
fs.watch(filename, function () {
	//send message to any subscriber
	publisher.send(JSON.stringify({
		//serialize the message sent down the wire
		type: "changed",
		file: filename,
		timestamp: Date.now()
	}));
});

//Listen on TCP port 5432
publisher.bind("tcp://*:5432", function (err) {
	console.log("Listening for zmq subscribers...");
});