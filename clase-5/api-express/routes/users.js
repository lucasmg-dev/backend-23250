var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  res.send('respond GET');
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  res.send('respond from POST');
});

router.put('/:id', function(req, res, next) {
  console.log(req.body)
  res.send('respond from PUT');
});

router.delete('/:id', function(req, res, next) {
  res.send('respond from DELETE');
});

module.exports = router;
