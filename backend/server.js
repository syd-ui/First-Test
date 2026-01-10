const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route test
app.get('/api/message', (req, res) => {
  res.json({ 
    message: 'Hello from Node.js backend!',
    timestamp: new Date().toISOString()
  });
});

// Route POST exemple
app.post('/api/users', (req, res) => {
  const user = req.body;
  console.log('User received:', user);
  res.json({ 
    status: 'User created',
    user: user 
  });
});

// Route avec paramètre
app.get('/api/users/:id', (req, res) => {
  res.json({ 
    userId: req.params.id,
    name: 'John Doe'
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});