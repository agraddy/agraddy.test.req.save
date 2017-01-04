var tap = require('agraddy.test.tap')(__filename);
var bottle = require('agraddy.util.bottle');
var fs = require('fs');
var http = require('http');
var stringify = require('json-stringify-safe');
var path = require('path');
var stream = require('stream');

var port;

var mod = require('../');

process.chdir('test');

// Delete any old output
try {
	fs.unlinkSync(path.join('output', 'one.js'));
} catch(e) {};

var server = http.createServer(function(req, res) {
	if(req.url == '/one') {
		mod('output/one.js')(req, res);
	} else if(req.url == '/two') {
		check(req, res);
	}
});

server.listen(function() {
	port = server.address().port;

	bottle.post('http://localhost:' + port + '/one', {example: 'data'}, function(err, res) {
		bottle.post('http://localhost:' + port + '/two', {example: 'data'}, function(err, res) {
			tap.assert(true, 'The requests should return.');
			process.exit();
		});
	});

});


function check(req, res) {
	var loaded = require('./output/one.js');
	var req_stripped = JSON.parse(stringify(req));
	delete req_stripped.domain;
	delete req_stripped._events;
	delete req_stripped._eventsCount;
	delete req_stripped._maxListeners;
	delete req_stripped.socket;
	delete req_stripped.connection;
	delete req_stripped.statusCode;
	delete req_stripped.statusMessage;
	delete req_stripped.client;
	delete req_stripped._consuming;
	delete req_stripped._dumped;
	req_stripped.url = '/one';

	var loaded_without_read = JSON.parse(stringify(loaded));
	delete loaded_without_read._read;

	tap.assert.deepEqual(loaded_without_read, req_stripped, 'The saved file should create a usable request.');

	var writable = new stream.Writable();
	var content = '';

	writable._write = function(chunk, encoding, callback) {
		content += chunk.toString();
		callback();
	};

	loaded.pipe(writable).on('finish', function() {
		tap.assert.equal(content, 'example=data', 'The contents of the stream should match the data.');
		res.end();
	});

}


