var http = require('http');

var mod = new http.IncomingMessage();

mod._read = function(size) {
	mod.push('example=data');
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

mod.httpVersionMajor = JSON.parse('1');
mod.httpVersionMinor = JSON.parse('1');
mod.httpVersion = JSON.parse('"1.1"');
mod.complete = JSON.parse('false');
mod.headers = JSON.parse('{"content-type":"application/x-www-form-urlencoded","content-length":"12","host":"localhost:57449","connection":"close"}');
mod.rawHeaders = JSON.parse('["Content-Type","application/x-www-form-urlencoded","Content-Length","12","Host","localhost:57449","Connection","close"]');
mod.trailers = JSON.parse('{}');
mod.rawTrailers = JSON.parse('[]');
mod.upgrade = JSON.parse('false');
mod.url = JSON.parse('"/one"');
mod.method = JSON.parse('"POST"');

/*
mod.domain = null;
mod._events = null;
mod._eventsCount = 0;
mod._maxListeners = undefined;
mod.socket = undefined;
mod.connection = undefined;
mod.httpVersionMajor = 1;
mod.httpVersionMinor = 1;
mod.httpVersion = &quot;1.1&quot;;
mod.complete = false;

mod.headers = JSON.parse('{&quot;content-type&quot;:&quot;application/x-www-form-urlencoded&quot;,&quot;content-length&quot;:&quot;12&quot;,&quot;host&quot;:&quot;localhost:57449&quot;,&quot;connection&quot;:&quot;close&quot;}');
mod.rawHeaders = JSON.parse('[&quot;Content-Type&quot;,&quot;application/x-www-form-urlencoded&quot;,&quot;Content-Length&quot;,&quot;12&quot;,&quot;Host&quot;,&quot;localhost:57449&quot;,&quot;Connection&quot;,&quot;close&quot;]');
mod.trailers = {};
mod.rawTrailers = [];
mod.upgrade = false;
mod.url = '&quot;/one&quot;';
mod.method = &quot;POST&quot;;
mod.statusCode = ;
mod.statusMessage = ;
mod.client = ;
mod._consuming = ;
mod._dumped = ;
mod._read = ;
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
