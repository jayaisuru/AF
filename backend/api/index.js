// backend/api/index.js
const serverless = require('serverless-http');
const app = require('../server'); // this is your existing Express app

module.exports.handler = serverless(app);
