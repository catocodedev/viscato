const { run } = require('./src/processer');
var http = require('http');
var url = require('url');
var fs = require('fs');
var propertiesReader = require('properties-reader');

var config = propertiesReader('.catv_config.ini');
var index = config.get('main.indexpage');

console.log(index);

run(index);

http.createServer(function (req, res) {
	var requested_file = url.parse(req.url, true);
	var filename = "rendered/" + requested_file.pathname + ".html";
	if (fs.existsSync(filename)) {
		fs.readFile(filename, function (err, data) {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				return res.end("404 Not Found");
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		return res.end("404 Not Found");
	}

}).listen(8080);