function route(handle, pathname, response, request) {
    console.log('About to route a request for ' + pathname);
    
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);   // new arg: request instead of postData
    } else {
        console.log('No request handler found for ' + pathname);
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('404 not found');
        response.end();
    }
}

// this is passed to our server.start function in index.js rather than being required in server.js itself, thus dependency injection
exports.route = route;
