const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get('/cal', (req, res) => {
  // Handle GET request
  res.json({ answer: '0' });
});

app.post('/cal', (req, res) => {
  // Handle POST request
  const { A, B } = req.body;
  if (typeof A === 'number' && typeof B === 'number') {
    const result = A * B;
    res.json({ answer: result.toString() });
  } else {
    res.status(400).json({ error: 'Invalid input' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

