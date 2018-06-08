const express = require('express');
const router = express.Router();
const productsData = require('../sample-data.json');

const cart = productsData.search_response.items.Item;
// get all
router.get('/', (req, res) => {
  if (!cart) {
    return res.status(404).send('The product object does not exist');
  }

  res.send(cart);
});

// add to cart
router.post('/', (req, res) => {
  // validate?
  // is item formatted correctly
  // does item already exist?
  // control quantity from post

  const result = {
    title: req.body.title,
    id: req.body.upc,
    quantity: 1
  };

  cart.push(result);
  res.status(200).send(result);
});

// remove from cart
router.delete('/:upc', (req, res) => {
  const item = cart.find(g => g.upc == parseInt(req.params.upc));
  if (!item) {
    return res.status(404).send(`upc ${req.params.upc} was not found`);
  }

  const index = cart.indexOf(item);
  cart.splice(index, 1);

  res.send(item);
});

module.exports = router;
