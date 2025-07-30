const express = require('express');
const PORT = 3000;
const HOST = '0.0.0.0'; // 🔁 Accept connections from anywhere

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Finally i have created complete ci / cd pipeline for nodejs app<h1/>');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
