const http = require('http');

// server 설정
const server = http.createServer((req, res) => {
    res.write('<h1>Hello node</h1>');
    res.end('<p>end</p>');
});

// server port 설정
server.listen(8080);


server.on('listening', () => {
    console.log('server start');
});