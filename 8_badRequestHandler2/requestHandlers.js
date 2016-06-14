var exec = require('child_process').exec;

function start() {
    console.log("Request handler 'start' was called.");
    var content = 'empty';
    
    exec('ls -lah', function(error, stdout, stderr) {
        content = stdout;
    });
    
    // content returned with a value of 'empty'. why?
    // exec is non-blocking, so start() finishes before exec()'s callback can assign a new value to content
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
