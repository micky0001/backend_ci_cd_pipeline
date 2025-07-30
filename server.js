const express = require('express');
const PORT = 3000;
const HOST = '0.0.0.0'; // 🔁 Accept connections from anywhere

app.get('/', (req, res) => {
  res.send('<h1>Finally CI /CD pipeline for Node.js app is complete!</h1>');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

const express = require('express');
const app = express();
app.use(express.json());

let users = []; // In-memory array
let idCounter = 1;

// Create user
app.post('/api/users', (req, res) => {
  const user = { id: idCounter++, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

// Read all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Read single user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// Update user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send('User not found');

  Object.assign(user, req.body);
  res.json(user);
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.send('User deleted');
});

// Start server

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
