var fs = require('fs');
var http = require('http');
var path = require('path');
var Handlebars = require('handlebars');
var stream = require('stream');

var mod = function(file) {

	return function(req, res) {
		var tpl;
		fs.readFile(path.join(__dirname, '..', 'tpl', 'request.js'), function(err, data) {
			var writable = new stream.Writable();
			var pass = {};

			tpl = Handlebars.compile(data.toString());

			delete pass.domain;
			delete pass._events;
			delete pass._eventsCount;
			delete pass._maxListeners;
			delete pass.socket;
			delete pass.connection;
			delete pass.statusCode;
			delete pass.statusMessage;
			delete pass.client;
			delete pass._consuming;
			delete pass._dumped;
			//delete pass._read;
			//delete pass._readableState;
			
			pass.httpVersionMajor = JSON.stringify(req.httpVersionMajor);
			pass.httpVersionMinor = JSON.stringify(req.httpVersionMinor);
			pass.httpVersion = JSON.stringify(req.httpVersion);
			pass.complete = JSON.stringify(false);
			pass.headers = JSON.stringify(req.headers);
			pass.rawHeaders = JSON.stringify(req.rawHeaders);
			pass.trailers = JSON.stringify(req.trailers);
			pass.rawTrailers = JSON.stringify(req.rawTrailers);
			pass.upgrade = JSON.stringify(req.upgrade);
			pass.url = JSON.stringify(req.url);
			pass.method = JSON.stringify(req.method);

			pass.content = '';
			writable._write = function(chunk, encoding, callback) {
				pass.content += chunk.toString();
				callback();
			};

			req.pipe(writable).on('finish', function() {
				fs.writeFile(file, tpl({req: pass}), function(err) {
					var output = {status: 'success'};
					res.writeHead(200, {'Content-Type': 'application/javascript'});
					res.write(JSON.stringify(output));
					res.end();
				});
			});
		});
	}
};

module.exports = mod;
