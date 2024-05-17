const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tomcolegno:dJKLKGrkAKnRn1Bq@runtrackcluster.2gjgs0a.mongodb.net//LaPlateforme')
.then(() => {
    console.log('Connexion à la base de données réussie.');

    const yearSchema = new mongoose.Schema({
        year: String,
    }, { versionKey: false });
    const Years = mongoose.model('year', yearSchema, 'year');
    const yearData = [
        { year: 'bachelor 1' },
        { year: 'bachelor 2' },
        { year: 'bachelor 3' }
    ]

    return(Years.insertMany(yearData));
})
.then((insertedYears) => {
    console.log('Niveaux de cursus ajoutés :', insertedYears);

    // Définition du schéma "student"
    const studentSchema = new mongoose.Schema({
        lastname: String,
        firstname: String,
        students_number: Number,
        year_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'year' // Référence au modèle "year"
        }
    });
    const Student = mongoose.model('student', studentSchema, 'student');

    const updateQuery = { $set: { year_id: null }};
    const options = { multi: true };
    return(Student.updateMany({}, updateQuery, options));
})
.then((updateResult) => {
    console.log('Suppression des références existantes terminée :', updateResult.nModified, 'étudiants mis à jour.');

    // Maintenant, nous allons mettre à jour chaque étudiant avec l'année de cursus correspondante
    return(mongoose.model('year').find({}));
})
.then((years) => {
    const updates = years.map((year) => ({
        updateOne: {
            filter: { year_id: null }, // Mettre à jour seulement les étudiants sans année de cursus
            update: { $set: { year_id: year._id } }
        }
    }));

    mongoose.model('student').bulkWrite(updates);
})
.catch((err) => {
    console.error(`Une erreur est survenue : ${err}`);
})