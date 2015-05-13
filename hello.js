var http = require('http');

function logsTimestamp() {
  console.log(new Date());
};

var handleRequest = function(req, res) {
  res.writeHead(200, {'Content-type' : 'text/plain'});

  if ( req.url === '/favicon.ico') {
    res.end('');
    return;
  }

  console.log('First write starting');
  res.write('This is half ', logsTimestamp)
  console.log('Second write starting');
  res.write('of the awesome message! ', logsTimestamp)
  console.log('Writes ended');
  res.end('Hello World', logsTimestamp);
  console.log('Response Ended');

};

var server = http.createServer(handleRequest);
server.listen(1337);

console.log('Server is running on port 1337');



// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337);
//
// console.log('Server running at http://localhost:1337/');



// Simple web server.
// We are requiring the http module.
// The createServer takes a function with two arguments (req, res)
// ?
// It will display Hello World and create a new line.
// listener on port 1337
// It will log "Server running at http://localhost:1337/" to the terminal
