const http = require('http');

const Server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');  // Setting the header for response
    console.log(req.url , req.method , req.headers); // Logging request details
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>This is my first Page</h1></body>');
    res.write('</html>');
    res.end();  
})
const PORT = 3000;
Server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});