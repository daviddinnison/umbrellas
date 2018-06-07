const Joi = require('joi');
const express = require('express');
const app = express();
const products = require('./routes/products');
const cart = require('./routes/cart');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/products', products);
app.use('/api/cart', cart);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
