function route(handle, pathname) {
    console.log('About to route a request for ' + pathname);
    
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();  // also bad
    } else {
        console.log('No request handler found for ' + pathname);
        return "404 not found";
    }
}

// this is passed to our server.start function in index.js rather than being required in server.js itself
exports.route = route;
