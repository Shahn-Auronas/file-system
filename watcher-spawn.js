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
	let ls = spawn('ls', ['-lh', filename]);
	//pipe() sends the std out from the child process
	//directly to our own std output stream
	ls.stdout.pipe(process.stdout);
});
console.log("Now watching " + filename + " for changes...");