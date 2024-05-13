var url = require('url');
let myURL = new URL(`https://www.google.com&search=nodejs`);
let changedURL = new URL (myURL)

console.log("Protocole: " + myURL.protocol);
console.log("Host: " + myURL.hostname);
console.log("Paramètres: " + myURL.searchParams);

changedURL.host = "www.laplateforme.io"
changedURL.searchParams.set('search', 'nodejs')
let newURL = changedURL.toString();


console.log("Nouvelle URL: " +newURL);