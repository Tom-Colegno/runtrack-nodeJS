const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tomcolegno:dJKLKGrkAKnRn1Bq@runtrackcluster.2gjgs0a.mongodb.net//LaPlateforme')
.then(() => {
    console.log('Connexion à la base de données réussie.');

    const studentSchema = new mongoose.Schema({
        lastname: String,
        firstname: String,
        students_number: Number,
    }, { versionKey: false });
    
    const Students = mongoose.model('student', studentSchema, 'student');
    const studentsData = [
        {
            lastname: 'LeBricoleur',
            firstname: 'Bob',
            students_number: 1,
        },
        {
            lastname: 'Doe',
            firstname: 'John',
            students_number: 2,
        },
        {
            lastname: 'Dupont',
            firstname: 'Marine',
            students_number: 3,
        }
    ]

    return(Students.insertMany(studentsData));
})
.then((insertedStudents) => {
    console.log('Étudiants ajoutés :', insertedStudents);
})
.catch((err) => {
    console.error(`Une erreur est survenue : ${err}`);
})