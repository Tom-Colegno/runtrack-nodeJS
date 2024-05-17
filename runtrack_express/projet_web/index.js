const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Définir le dossier "public" comme dossier statique
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route pour la page "about"
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Gestionnaire d'erreur pour toutes les autres routes non définies
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
