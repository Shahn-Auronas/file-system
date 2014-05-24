/*
 * Capturing the child process's output by listening 
 * for events on the stream
*/

"use strict";

const fs = require('fs'),
      spawn = require('child_process').spawn,
      filename = process.argv[2];
if (!filename) {
	throw Error("A file to watch must be specified");
}
fs.watch(filename, function () {
	//first param is name of  program to exec and 
	//second is the array of command line args
	let ls = spawn('ls', ['-lh', filename]),
	    //buffer the output coming from the child process
	    //nodes way of  representing binary data
	    output = '';
	//add event listeners, listening for data events
	ls.stdout.on('data', function (chunk) {
		//chunk param to callback is extra info for data
		//each chunk of data is appended to the output
		//toString() converts the buffer's contents to
		//JS string using Node's default encoding(UTF-8)
		//saves to heap memory
        output += chunk.toString();
	});
	ls.on('close', function () {
		//parse the output data by spliting on sequences
		//of one or more whitespace chars
		let parts = output.split(/\s+/);
		//report on the first, fifth and 9th fields
		//permissions, size and file name
		console.dir([parts[0], parts[4], parts[8]]);
	});
});
console.log("Now watching " + filename + " for changes...");