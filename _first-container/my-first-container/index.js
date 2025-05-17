const http = require('http');

const server = http.createServer((req, res) => {   
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello its Jomari😎!</h1> <br> <p>Youve successfully run a Node.js app in Docker!</p>');
    }
);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);

