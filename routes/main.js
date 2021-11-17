const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact', menuId:'contact'});
});

module.exports = router;
