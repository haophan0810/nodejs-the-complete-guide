const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    console.log('res :', req);
    
})

server.listen(port);