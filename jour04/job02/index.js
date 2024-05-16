const { MongoClient } = require('mongodb');

// URL de connexion à votre base de données MongoDB
const url = 'mongodb://localhost:27017';

// Nom de la base de données
const dbName = 'LaPlateforme';

// Fonction pour se connecter à la base de données
async function connectToDatabase() {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connecté à la base de données');

        // Renvoie l'instance de la base de données connectée
        return client.db(dbName);
    } catch (error) {
        console.error('Erreur de connexion à la base de données', error);
        throw error;
    }
}

// Appel de la fonction pour se connecter à la base de données
connectToDatabase();
