var http = require('http');
var url = require('url');   // url module

function start(route, handle) {
    function onRequest(request, response) {
        // url pathname
        var pathname = url.parse(request.url).pathname;
        console.log('Request received for ' + pathname);

        // handle object passed so route function knows what to do with diff paths
        route(handle, pathname, response);
        
        // responding to the request is now taken care of by the router and request handler functions
        /*response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello World');
        response.end();*/
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

// exports and module.exports are the same thing

// anything within the exports object is callable when this 
// file is imported as a module

// ex. could be
/*
exports = {
    start: start,
    other functions etc.
};
*/
exports.start = start;
