function route(handle, pathname, response, postData) {
    console.log('About to route a request for ' + pathname);
    
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);   // new arg: postData
    } else {
        console.log('No request handler found for ' + pathname);
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('404 not found');
        response.end();
    }
}

// this is passed to our server.start function in index.js rather than being required in server.js itself
exports.route = route;