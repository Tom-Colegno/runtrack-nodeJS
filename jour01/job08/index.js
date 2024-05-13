const fs = require('fs');;
let dataMissingLetters = ""
fs.readFile('data.txt', 'utf8', function(err, data){
    for (let i = 0; i < data.length; i++) {
        if(i % 2 == 0)
            {
                dataMissingLetters = dataMissingLetters + data[i];

            }

    }
    console.log(dataMissingLetters)

});
