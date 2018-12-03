const http = require('http');
const fs = require('fs');
const router = require('./router');

console.log(router);
const port = 3000;
// const root = document.getElementById('root');

const server = http.createServer(router.requestHandle);
server.listen(port);