var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(request, response) {

    /* response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello this is the server response sis web cato');
    response.end();
    console.log(request); */

    pathName = url.parse(request.url).pathname;
    fs.readFile(__dirname + pathName, function(err, data) {
        if (err) {
            response.writeHead(404, { 'Content-type': 'text/plan' });
            response.write('Page Was Not Found');
            response.end();
        } else {
            response.writeHead(200);
            response.write(data);
            response.end();
        }
    });

}).listen(7000);