const fs = require('fs');;
fs.readFile('data.txt', 'utf8', function(err, data){
    console.log(data);
});