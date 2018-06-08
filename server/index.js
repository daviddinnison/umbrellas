const Joi = require('joi');
const express = require('express');
const app = express();
const products = require('./routes/products');
const cart = require('./routes/cart');
const morgan = require('morgan');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/products', products);
app.use('/api/cart', cart);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
