var http = require('http');

var mod = new http.IncomingMessage();

var lines = [];
var index = 0;
lines.push('-----------------------------NODECLIENT');
lines.push('Content-Disposition: form-data; name="example"');
lines.push('');
lines.push('data');
lines.push('-----------------------------NODECLIENT--');
lines.push('');
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
mod.headers = JSON.parse('{"content-type":"multipart/form-data; boundary=---------------------------NODECLIENT","content-length":"140","host":"localhost:54835","connection":"close"}');
mod.rawHeaders = JSON.parse('["Content-Type","multipart/form-data; boundary=---------------------------NODECLIENT","Content-Length","140","Host","localhost:54835","Connection","close"]');
mod.trailers = JSON.parse('{}');
mod.rawTrailers = JSON.parse('[]');
mod.upgrade = JSON.parse('false');
mod.url = JSON.parse('"/three"');
mod.method = JSON.parse('"POST"');

module.exports = mod;

