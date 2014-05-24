/*
  This file uses the file stream to pipe a file's data to standard output

*/

//#! means you can execute a program directly into 
//unix like systems. It doesn't need to be passed into the node program

#!/usr/bin/env node --harmony

//not assigning a var, but returns a module so we can call methods directly
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);