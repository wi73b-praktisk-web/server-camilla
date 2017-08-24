const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const router = require('./controllers/routesController');

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
   // res.write('<h1>Hello from server</h1>');
  //  res.end();
  router.init(req, res);
});

server.listen(port, hostname, function () {
   console.log(`serveren kører på http://${hostname}:${port}/`);
});