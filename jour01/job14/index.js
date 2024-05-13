const http = require('http');
const fs = require('fs');

const port = 8888;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        fs.readFile('index.html', (err, data) => {

            res.setHeader('Content-Type', 'text/html');
            res.end(data);

        });
    } else if (url === '/about') {
        fs.readFile('about.html', (err, data) => {
           
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        );
    } else {
        fs.readFile('error.html', (err, data) => {
           
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 404;
            res.end(data);
        }
    );

    }
});

server.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});