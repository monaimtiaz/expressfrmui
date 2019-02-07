var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', {  layouts:'main.hbs'  });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', {  layouts:'main.hbs' });
});
router.get('/welcome', function(req, res, next) {
  res.render('welcome', { layouts:'main.hbs'  });
});
router.get('/start', function(req, res, next) {
  res.render('start', {  layouts:'main.hbs'  });
});
 


module.exports = router;
