// by convention, index.js is the 'entry point' of a node.js app

// enter 'localhost:8888' in browser to run
var server = require('./server');   // notice how ./ is included even though server.js is in the same dir as this file
var router = require('./router');

server.start(router.route);
