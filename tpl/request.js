var http = require('http');

var mod = new http.IncomingMessage();

mod._read = function(size) {
	mod.push('{{{req.content}}}');
	mod.push(null);
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

/*
mod.domain = null;
mod._events = null;
mod._eventsCount = 0;
mod._maxListeners = undefined;
mod.socket = undefined;
mod.connection = undefined;
mod.httpVersionMajor = {{req.httpVersionMajor}};
mod.httpVersionMinor = {{req.httpVersionMinor}};
mod.httpVersion = {{req.httpVersion}};
mod.complete = {{req.complete}};

mod.headers = JSON.parse('{{req.headers}}');
mod.rawHeaders = JSON.parse('{{req.rawHeaders}}');
mod.trailers = {{req.trailers}};
mod.rawTrailers = {{req.rawTrailers}};
mod.upgrade = {{req.upgrade}};
mod.url = '{{req.url}}';
mod.method = {{req.method}};
mod.statusCode = {{req.statusCode}};
mod.statusMessage = {{req.statusMessage}};
mod.client = {{req.client}};
mod._consuming = {{req._consuming}};
mod._dumped = {{req._dumped}};
mod._read = {{req._read}};
*/




			      //readable: true,
			      ////domain: null,
			      ////_events: {},
			      ////_eventsCount: 0,
			      ////_maxListeners: undefined,
			      ////socket: undefined,
			      ////connection: undefined,
			      ////httpVersionMajor: null,
			      ////httpVersionMinor: null,
			      ////httpVersion: null,
			      ////complete: false,
			      ////headers: {},
			      ////rawHeaders: [],
			      ////trailers: {},
			      ////rawTrailers: [],
			      ////upgrade: null,
			      ////url: '',
			      ////method: null,
			      ////statusCode: null,
			      ////statusMessage: null,
			      ////client: undefined,
			      ////_consuming: false,
			      ////_dumped: false,
			      ////_read: [Function] }




module.exports = mod;


/*

IncomingMessage {
	_readableState: 
		ReadableState {
			objectMode: false,
				highWaterMark: 16384,
				buffer: BufferList { head: null, tail: null, length: 0 },
				length: 0,
				pipes: null,
				pipesCount: 0,
				flowing: null,
				ended: false,
				endEmitted: false,
				reading: false,
				sync: true,
				needReadable: false,
				emittedReadable: false,
				readableListening: false,
				resumeScheduled: false,
				defaultEncoding: 'utf8',
				ranOut: false,
				awaitDrain: 0,
				readingMore: true,
				decoder: null,
				encoding: null },
			      readable: true,
			      domain: null,
			      _events: {},
			      _eventsCount: 0,
			      _maxListeners: undefined,
			      socket: undefined,
			      connection: undefined,
			      httpVersionMajor: null,
			      httpVersionMinor: null,
			      httpVersion: null,
			      complete: false,
			      headers: {},
			      rawHeaders: [],
			      trailers: {},
			      rawTrailers: [],
			      upgrade: null,
			      url: '',
			      method: null,
			      statusCode: null,
			      statusMessage: null,
			      client: undefined,
			      _consuming: false,
			      _dumped: false,
			      _read: [Function] }



			      */
