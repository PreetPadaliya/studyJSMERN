const http = require('http');

const Server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My Server</title></head>');

    if(req.url === '/'){
        res.write('<body><h1>Welcome to the Home Page</h1></body>');
        return res.end();
    }
    else if(req.url === '/about'){
        res.write('<body><h1>About Us</h1></body>');
        return res.end();
    }
    else {
        res.write('<body><h1>404 Not Found</h1></body>');
        return res.end();
    }
})

const PORT = 3000;
Server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})