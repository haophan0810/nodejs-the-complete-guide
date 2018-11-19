const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    
    const url = req.url;
    console.log('url :', url);
    const method = req.method;
    if(url === '/'){
        res.write(`
            <html>
                <head>
                </head>
                <body>
                    <form action='/message' name='message' method='POST' >
                        <input type='text'></input>
                        <button>Send</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

    if(url === '/message' && method === 'POST' ){
        fs.writeFileSync('output.txt', 'YES');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.write(`
        <html>
            <head>
            </head>
            <body>
              ok!
            </body>
        </html>
        `);
    return res.end()
    }

    res.setHeader('Content_type', 'message');
    res.write(`
    <html>
        <head>
        </head>
        <body>
            <form action='/message' name='message' method='POST' >
                <input type='text'></input>
                <button>Send</button>
            </form>
        </body>
    </html>
`);
    res.end()
    

})

server.listen(port);