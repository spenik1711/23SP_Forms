var express = require('express');
var router = express.Router();

router.get('/create', function(req, res, next) {
  res.render('bird-creation');
});

router.post('/create', function(req, res, next) {
  var bird = {
    species: req.body.species,
    nickname: req.body.nickname,
    status: req.body.status
  };
  console.log(bird);
  res.redirect('/birds/confirmation');
});

module.exports = router;