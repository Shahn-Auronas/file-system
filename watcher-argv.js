const fs = require('fs'),
      filename = process.argv[2];
if (!filename) {
	throw Error("A file to watch must be specified!");
}
fs.watch(filename, function () {
	console.log("file" + filename + " for changes...");
});
console.log("Now watching " + filename + " for changes...");