const http = require('http');

const app = http.createServer((req, resp) => {
  resp.end('Hello Holberton School!');
});
app.listen(1245);

module.exports = app;
