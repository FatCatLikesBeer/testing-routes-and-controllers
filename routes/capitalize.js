const express = require('express');
const router = express.Router();

router.post('/capitalize', (req, res, next) => {
  let result = req.body.item;
  result = String(result[0].toUpperCase() + result.slice(1));
  res.json({ data: result });
});

router.post('/reverse', (req, res, next) => {
  let item = req.body.item;
  let result = "";
  for (let i = 0; i < item.length; i++) {
    result = result + item[item.length - 1 - i]
  }
  res.json({ data: result });
});

router.post('/calculator', (req, res, next) => {
  let first = req.body.first;
  let second = req.body.second;
  let operator = req.body.operator;
  let expression = `${first} ${operator} ${second}`;
  let result = eval(expression);
  res.json({ data: result });
});

router.post('/cipher', (req, res, next) => {
  const alphaBeta = [
    "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y",
    "z",
  ];
  const item = req.body.item;
  let result = "";
  for (let i = 0; i < item.length; i++) {
    let location = alphaBeta.indexOf(item[i]);
    if (location >= 25) {
      location = location - 26;
    }
    result = result + alphaBeta[location + 1];
  };
  res.json({ data: result });
});

router.post('/analyze', (req, res, next) => {
  const response = JSON.parse(req.body.item);
  response.sort();
  let average = 0;
  response.forEach( elem => {
    average = average + elem;
  });
  average = average / response.length;
  const result = {
    average: average,
    min: response[0],
    max: response[response.length - 1],
    length: response.length,
  }
  res.json({ data: result });
})

module.exports = router;
