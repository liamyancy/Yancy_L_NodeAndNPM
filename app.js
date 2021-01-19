const http = require('http'); // like a PHP require
const stream = require('fs');

// require is more or less the same as a JS import

const hostname = '127.0.0.1'; // this is localhost
const port = 3000; // localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  let url = req.url; // localhost:3000/contact

  switch (url) {
    case "/contact":
        stream,readFile('contact.html', null, ((err, data) => {
          if (err) {
            res.writeHead(404);
            res.write('404 not found');
          } else {
              res.write(data);
          }
        }))
      break;

      case "/portfolio":
        stream,readFile('portfolio.html', null, ((err, data) => {
          if (err) {
            res.writeHead(404);
            res.write('404 not found');
          } else {
              res.write(data);
          }
        }))
      break;

      default:
      res.end('Hello World'); // server up a custom error page
  }
});

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});