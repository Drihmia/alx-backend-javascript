const express = require('express');

const app = express();
app.use(express.json());

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

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log("API available on localhost port 7865");
  });
}
module.exports = app;
