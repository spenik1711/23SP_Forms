var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/birds', function(req, res, next) {
  res.render('index', { title: 'Bird Creation' });
});

module.exports = router;
