const express = require('express');
const app = express();
const port = 80;

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('<h1>Page d\'accueil</h1><p>Ceci est la page d\'accueil de mon site web.</p>');
});

// Route pour la page "about"
app.get('/about', (req, res) => {
  res.send('<h1>À propos</h1><p>Cette page présente mon projet.</p>');
});

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});