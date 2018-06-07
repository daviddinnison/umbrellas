const express = require('express');
const router = express.Router();

const cart = [{ id: 1, title: 'blue umbrella with white circles', quantity: 1 }];

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
router.delete('/:id', (req, res) => {
  const item = cart.find(g => g.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).send(`ID ${req.params.id} was not found`);
  }

  const index = cart.indexOf(item);
  cart.splice(index, 1);

  res.send(item);
});

module.exports = router;
