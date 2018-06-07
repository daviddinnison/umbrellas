const productsData = require('../sample-data.json');
const express = require('express');
const router = express.Router();

// get all
router.get('/', (req, res) => {
  if (!productsData) {
    return res.status(404).send('The product object does not exist');
  }

  res.send(productsData);
});

module.exports = router;
