const express = require('express');
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.use(express.json());

// Dummy user data
let users = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Alice Johnson", age: 28 },
  { id: 4, name: "Bob Brown", age: 35 }
];

let idCounter = users.length + 1;

// Root route
app.get('/', (req, res) => {
  res.send('<h1>Finally CI/CD pipeline for Node.js app is complete!</h1>');
});

// Show users as HTML
app.get('/api/users', (req, res) => {
  let html = `
    <html>
    <head>
      <title>User List</title>
      <style>
        body { font-family: Arial, sans-serif; background: #f2f2f2; }
        table { width: 60%; margin: 40px auto; border-collapse: collapse; }
        th, td { padding: 10px; border: 1px solid #ccc; text-align: left; }
        th { background-color: #f5f5f5; }
        h1 { text-align: center; }
      </style>
    </head>
    <body>
      <h1>User List</h1>
      <table>
        <tr><th>ID</th><th>Name</th><th>Age</th></tr>
  `;

  users.forEach(user => {
    html += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
      </tr>
    `;
  });

  html += `
      </table>
    </body>
    </html>
  `;

  res.send(html);
});

// Create user
app.post('/api/users', (req, res) => {
  const user = { id: idCounter++, ...req.body };
  users.push(user);
  res.status(201).json(user);
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
app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
});
