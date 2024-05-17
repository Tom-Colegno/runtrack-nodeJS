const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tomcolegno:dJKLKGrkAKnRn1Bq@runtrackcluster.2gjgs0a.mongodb.net//LaPlateforme')
.then(() => {
    console.log('Connexion à la base de données réussie.');
})
.catch((err) => {
    console.error(`Une erreur est survenue : ${err}`);
})
