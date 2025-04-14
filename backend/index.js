// const serverless = require('serverless-http');
// const app = require('../server');

// module.exports = serverless(app);



const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});