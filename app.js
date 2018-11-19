const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'Haophan');
    res.write(`
        <html>
            <head>
            
            </head>
            <body>
            <h1>heloo</h1>
            
            
            </body>
        </html>
    `);
    res.end()
    

})

server.listen(port);