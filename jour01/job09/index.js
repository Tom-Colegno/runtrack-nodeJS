var fs = require('fs');
let newData = "Je manipule les fichiers avec un module node !"
fs.writeFile('data.txt', newData, function (err) {
    if (err) throw err;
    fs.readFile('data.txt', 'utf8', function (err, data) {
        console.log(data);
    });
}); 