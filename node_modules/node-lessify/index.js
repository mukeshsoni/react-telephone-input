// v0.0.6

var path = require("path");
var through = require('through2');
var less = require('less');

var textMode = false,
	func_start = "(function() { var head = document.getElementsByTagName('head')[0]; style = document.createElement('style'); style.type = 'text/css';",
	func_end = "if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);}())"; 

try {
	var options = require(process.cwd() + "/package.json");
} catch (e) {
	var options = {};
};

/*
you can pass options to the transform from your package.json file like so: 
    "browserify": {
        "transform-options": {
        	"node-lessify": "textMode"
        }
    }
*/

/*
textMode simply compiles the LESS into a single string of CSS and passes it back without adding the code that automatically appends that CSS to the page
*/

if (options.browserify && options.browserify["transform-options"] && options.browserify["transform-options"]["node-lessify"] == "textMode") {
	textMode = true;
}

module.exports = function(file) {
	if (!/\.css$|\.less$/.test(file)) {
		return through();
	}

	var buffer = "", mydirName = path.dirname(file);

	return through(write, end);

    function write(chunk, enc, next) {
        buffer += chunk.toString();
        next();
    }

	function end(done) {
        var self = this;

        try {
	  		// CSS is LESS so no need to check extension
			less.render(buffer, { 
				paths: [".", mydirName],
				compress: true
			}, function(e, output) { 
				compiled = output.css; 
				if (textMode) {
		            compiled = "module.exports = \"" + compiled.replace(/'/g, "\\'").replace(/"/g, '\\"') + "\";";
				} else {
					compiled = func_start + "var css = \"" + compiled.replace(/'/g, "\\'").replace(/"/g, '\\"') + "\";" + func_end;
				}

				self.push(compiled);
	            self.push(null);
				done();
			}); 
		} catch (error) {
			self.emit('error', (error instanceof Error) ? error : new Error(error));
			done();
        }
	}
};