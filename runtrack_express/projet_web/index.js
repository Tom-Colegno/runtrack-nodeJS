const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Bonjour, ceci est votre serveur web!');
});

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});