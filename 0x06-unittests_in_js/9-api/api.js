const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => { res.send('Welcome to the payment system')});
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) {
    res.status(404).send('Cart ID is invalid');
    return;
  }
  res.send(`Payment methods for cart ${id}`)
});

if (require.main === module) {
  app.listen(port, () => {
    console.log("API available on localhost port 7865");
  });
}
module.exports = app;
