const fs = require('fs');
const directoryPath = '/Users/tomcolegno/Documents/La Plateforme_/runtrack nodeJs/Jour01';

fs.readdir(directoryPath, (_, files) => {
    files.forEach((file) => {
        console.log(file);
    });
});
