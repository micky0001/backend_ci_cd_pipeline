const express = require('express');
const PORT = 3000;
const HOST = '0.0.0.0'; // 🔁 Accept connections from anywhere

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Finally CI /CD pipeline for Node.js app is complete!</h1>');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
