function route(pathname) {
    console.log('About to route a request for ' + pathname);
}

// this is passed to our server.start function in index.js rather than being required in server.js itself
exports.route = route;
