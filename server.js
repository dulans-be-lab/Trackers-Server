const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
// const server = http.createServer((req, res) => {
//   res.end('This is me');
// });

// request and response serama handle wenne express haraha nisa server eka hadanawa express framework eka yodaagaththa app kiyana variable eken
const server = http.createServer(app);
app.set('port', port);
server.listen(port);
