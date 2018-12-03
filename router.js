const fs = require('fs');

const requestHandle = (req, res) => {
    const { url, method } = req;
    console.log('url :', url);   
    if(url === '/'){
        res.write(`
            <html>
                <head>
                </head>
                <body>
                    <form action='/message' name='message' method='POST' >
                        <input type='text'></input>
                        <button type='submit'>Send</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

    if(url === '/message' && method === 'POST' ){
        let body = [];
        req.on('data', (chunk) => {
            console.log('chunk :', chunk );
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('body0 :', body);
            const bodyParse = Buffer.concat(body).toString();
            console.log('body :', bodyParse);
            fs.writeFileSync('output.txt', bodyParse);
        });
        
        res.statusCode = 302;
        res.setHeader('Location', '/');       
        return res.end();
    }

    res.setHeader('Content_type', 'message');
    res.write(`
    <html>
        <head>
        </head>
        <body>
            <form action='/message' name='message' method='POST' >
                <input type='text'></input>
                <button>send2</button>
            </form>
        </body>
    </html>
`);
    res.end()
    
}

// module.exports = requestHandle;

exports.requestHandle = requestHandle;