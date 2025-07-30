const express = require('express');
const PORT = 3000;
const HOST = '0.0.0.0'; // 🔁 Accept connections from anywhere

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World i am doing some changes to this file by using ci /cd pipelien ok karo');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
