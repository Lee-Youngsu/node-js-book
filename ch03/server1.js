const http = require('http');

http.createServer((req, res) => {
   res.write('hellow server 8080');
   res.end('<p>end</p>');
}).listen(8080, () => {
    console.log('server 8080');
});