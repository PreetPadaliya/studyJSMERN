const http = require('http');

const Server = http.createServer((req,res)=>{
        res.setHeader('Content-type','text/html');
        console.log(req.url , req.method , req.headers);
        if(req.url === '/'){
    res.write('<html>');
    res.write('<head><title>Myntra</title></head>');
    res.write('<body><h1>Welcome to Myntra</h1>');
    res.write('<a href="/Home">Home</a><br>');
    res.write('<a href="/Men">Men</a><br>');
    res.write('<a href="/Women">Women</a><br>');
    res.write('<a href="/Kids">Kids</a><br>');
    res.write('<a href="/Cart">Cart</a><br>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
        } 
        else if(req.url === '/Home'){
            
            res.write('<body><h1>This is Home Page</h1></body>');
          
            return res.end();
        }
        else if(req.url === '/Men'){
            res.write('<html>');
            res.write('<head><title>Mens Page</title></head>');
            res.write('<body><h1>This is Mens Page</h1></body>');
            res.write('</html>');
            return res.end();
        }
        else if(req.url === '/Women'){      
            res.write('<html>');
            res.write('<head><title>Womens Page</title></head>');
            res.write('<body><h1>This is Womens Page</h1></body>'); 
            res.write('</html>');
            return res.end();
        }
        else if(req.url === '/Kids'){
            res.write('<html>');
            res.write('<head><title>Kids Page</title></head>');
            res.write('<body><h1>This is Kids Page</h1></body>');
            res.write('</html>');
            return res.end();
        }
        else if(req.url === '/Cart'){
            res.write('<html>');
            res.write('<head><title>Cart Page</title></head>');
            res.write('<body><h1>This is Cart Page</h1></body>');
            res.write('</html>');
            return res.end();
        }
         else{
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>404 Not Found</title></head>');
        res.write('<body><h1>404 Not Found</h1></body>');
        res.write('</html>');
        return res.end();
         }
})

const PORT = 3000;
Server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})