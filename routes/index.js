const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/contact', (req, res, next) => {
  res.render('contact');
});

router.get('/about', (req, res, next) => {
  res.render('about');
});


router.get('/recipe-single', (req, res, next) => {
  res.render('recipe-single');
});

router.get('/recipes', (req, res, next) => {
  res.render('recipes');
});
router.get('/validation', (req, res, next) => {
  res.render('validation');
});

router.post('/validation', (req, res, next) => {
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.check);
  
  res.render('validation-sucsess');
});




module.exports = router;
