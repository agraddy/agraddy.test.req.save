var http = require('http');

var mod = new http.IncomingMessage();

var lines = [];
var index = 0;
{{#each req.lines}}
lines.push('{{{this}}}');
{{/each}}
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

mod.httpVersionMajor = JSON.parse('{{{req.httpVersionMajor}}}');
mod.httpVersionMinor = JSON.parse('{{{req.httpVersionMinor}}}');
mod.httpVersion = JSON.parse('{{{req.httpVersion}}}');
mod.complete = JSON.parse('{{{req.complete}}}');
mod.headers = JSON.parse('{{{req.headers}}}');
mod.rawHeaders = JSON.parse('{{{req.rawHeaders}}}');
mod.trailers = JSON.parse('{{{req.trailers}}}');
mod.rawTrailers = JSON.parse('{{{req.rawTrailers}}}');
mod.upgrade = JSON.parse('{{{req.upgrade}}}');
mod.url = JSON.parse('{{{req.url}}}');
mod.method = JSON.parse('{{{req.method}}}');

module.exports = mod;

