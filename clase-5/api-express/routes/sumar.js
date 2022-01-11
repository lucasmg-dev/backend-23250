const express = require("express")
const router = express.Router()

// /sumar -> ruta

router.get('/', function(req, res, next) {
  const suma = parseInt(req.query.num1) + parseInt(req.query.num2)
  res.send({
    suma
  });
});

router.get('/:num', function(req, res, next) {
  const arrNum = req.params.num.split("+")
  const suma = parseInt(arrNum[0]) + parseInt(arrNum[1])
  res.send({
    suma
  });
});

router.get('/:num1/:num2', function(req, res, next) {
  const suma = parseInt(req.params.num1) + parseInt(req.params.num2)
  res.send({
    suma
  });
});

module.exports = router