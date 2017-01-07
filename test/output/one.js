var http = require('http');

var mod = new http.IncomingMessage();

var lines = [];
var index = 0;
lines.push('example=data');
mod._read = function(size) {
	if(index + 1 < lines.length) {
		mod.push(lines[index] + '\r\n');
	} else {
		mod.push(lines[index]);
		mod.push(null);
	}
	index++;
};

delete mod.domain;
delete mod._events;
delete mod._eventsCount;
delete mod._maxListeners;
delete mod.socket;
delete mod.connection;
delete mod.statusCode;
delete mod.statusMessage;
delete mod.client;
delete mod._consuming;
delete mod._dumped;

mod.httpVersionMajor = JSON.parse('1');
mod.httpVersionMinor = JSON.parse('1');
mod.httpVersion = JSON.parse('"1.1"');
mod.complete = JSON.parse('false');
mod.headers = JSON.parse('{"content-type":"application/x-www-form-urlencoded","content-length":"12","host":"localhost:54835","connection":"close"}');
mod.rawHeaders = JSON.parse('["Content-Type","application/x-www-form-urlencoded","Content-Length","12","Host","localhost:54835","Connection","close"]');
mod.trailers = JSON.parse('{}');
mod.rawTrailers = JSON.parse('[]');
mod.upgrade = JSON.parse('false');
mod.url = JSON.parse('"/one"');
mod.method = JSON.parse('"POST"');

module.exports = mod;

