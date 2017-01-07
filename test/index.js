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
try {
	fs.unlinkSync(path.join('output', 'three.js'));
} catch(e) {};

var server = http.createServer(function(req, res) {
	if(req.url == '/one') {
		mod('output/one.js')(req, res);
	} else if(req.url == '/two') {
		checkTwo(req, res);
	} else if(req.url == '/three') {
		mod('output/three.js')(req, res);
	} else if(req.url == '/four') {
		checkFour(req, res);
	}
});

server.listen(function() {
	port = server.address().port;

	one();
});


// Create the output/one.js file
function one() {
	bottle.post('http://localhost:' + port + '/one', {example: 'data'}, function(err, res) {
		two();
	});

}

function two() {
	bottle.post('http://localhost:' + port + '/two', {example: 'data'}, function(err, res) {
		tap.assert(true, 'The requests should return.');

		three();
	});
}

// Create the output/three.js file
function three() {
	bottle.post('http://localhost:' + port + '/three', {example: 'data'}, {type: 'multipart'}, function(err, res) {
		four();
	});
}

function four() {
	bottle.post('http://localhost:' + port + '/four', {example: 'data'}, {type: 'multipart'}, function(err, res) {
		tap.assert(true, 'The requests should return.');

		process.exit();
	});
}

function checkTwo(req, res) {
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

function checkFour(req, res) {
	var loaded = require('./output/three.js');
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
	req_stripped.url = '/three';

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
		var lines = [];
		lines.push('-----------------------------NODECLIENT');
		lines.push('Content-Disposition: form-data; name="example"');
		lines.push('');
		lines.push('data');
		lines.push('-----------------------------NODECLIENT--');
		tap.assert.equal(content, lines.join('\r\n') + '\r\n', 'The contents of the stream should match the data.');
		res.end();
	});

}


