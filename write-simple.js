"use strict";

const fs = require('fs');
fs.writeFile('target.txt', 'a witty fucking message',
	function (err) {
        if (err) {
        	throw err;
        }
        console.log("file saved");
	}
);