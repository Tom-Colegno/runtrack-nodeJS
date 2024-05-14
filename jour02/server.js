// server.js

const express = require('express');
const app = express();

// Définition des routes
app.get('/', (req, res) => {
  res.send('Bonjour, ceci est une page d\'accueil.');
});

app.get('/about', (req, res) => {
  res.send('À propos de nous.');
});

// Export du serveur Express
module.exports = app;