// backend/server.js
const express = require('express');
const app = express();

const routes = require('./routes'); // adjust if needed
app.use(express.json());
app.use('/', routes); // or just '/', depending on your app

module.exports = app; // export the app instead of listening

