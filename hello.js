var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337);

console.log('Server running at http://localhost:1337/');

// Simple web server.
// We are requiring the http module.
// The createServer takes a function with two arguments (req, res)
// ?
// It will display Hello World and create a new line.
// listener on port 1337
// It will log "Server running at http://localhost:1337/" to the terminal
