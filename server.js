const http = require('http');


const server = http.createServer((req, res) => {
  res.end('This is me');
});

server.listen(process.env.PORT || 3000);
