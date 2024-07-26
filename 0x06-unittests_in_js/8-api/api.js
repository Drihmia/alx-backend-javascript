const express = require('express');

const app = express();
const port = 7865;

app.get('/', (reqp, res) => { res.send('Welcome to the payment system')});

if (require.main === module) {
  app.listen(port, () => {
    console.log("API available on localhost port 7865");
  });
}
module.exports = app;
