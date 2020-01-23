const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('recipe');
});

router.get('/recipe/:id', (req, res, next) => {
  res.send('recipe');
});



module.exports = router;
