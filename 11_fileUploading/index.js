// by convention, index.js is the 'entry point' of a node.js app

// enter 'localhost:8888' in browser to run
var server = require('./server');   // notice how ./ is included even though server.js is in the same dir as this file
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = { }; 
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);
