// backend/api/index.js
const serverless = require('serverless-http');
const app = require('../server'); // just the app, no listener

module.exports = serverless(app); // ✅ default export must be a function
