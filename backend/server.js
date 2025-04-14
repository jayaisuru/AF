// backend/server.js
const express = require('express');
const app = express();

// middleware, routes, etc.
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'It works!' });
});

module.exports = app;
