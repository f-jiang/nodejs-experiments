var http = require('http');
var url = require('url');   // url module

function start(route, handle) {
    function onRequest(request, response) {
        var postData = '';
        // url pathname
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received');

        request.setEncoding('utf8');
        
        request.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
            console.log('Received POST data chunk "' + postDataChunk + '"');
        });
        
        request.addListener('end', function() {
            // only call route when postData is ready            
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;