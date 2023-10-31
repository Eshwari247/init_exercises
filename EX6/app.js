const express = require('express');
const bodyParser = require('body-parser');
const Calculate = require('./mul');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get('/cal', (req, res) => {
  res.json({ answer: "0" });
});

app.post('/cal', (req, res) => {
  const { A, B } = req.body;
  const result = Calculate.multiply(A, B);
  res.json({ answer: result.toString() });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports= app;