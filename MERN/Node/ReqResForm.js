const http = require('http');
const fs = require('fs');

const Server = http.createServer((req,res)=>{
res.setHeader('Content-type','text/html'); 
console.log(req.url , req.method , req.headers);
    if(req.url === '/'){
res.write('<html>');
res.write('<head><title>Normal Form</title></head>');
res.write('<body><h1>Fill up the form</h1>');
res.write('<form action="/submit-details" method="POST">');
res.write('<label for="name">Name: </label>');
res.write('<input type="text" id="name" name="name"><br>');
res.write('<label for="gender">Gender: </label> ');
res.write('<input type="radio" id="male" name="gender" value="male"> Male  ');
res.write('<input type="radio" id="female" name="gender" value="female"> Female<br> ');
res.write('<input type="submit" value"Submit"> ');
res.write('</form>');
res.write('</body>');
res.write('</html>');
return res.end();
    }
    else if(req.url.toLocaleLowerCase() === '/submit-details' && req.method === 'POST'){
        fs.writeFileSync('formdetails.txt' , 'Form Submitted');
        res.statusCode = 302;
        res.setHeader('Location' , '/');
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