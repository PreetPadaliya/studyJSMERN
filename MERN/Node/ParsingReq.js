const http = require('http');
const fs = require('fs');

const Srever = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html')
    console.log(req.url , req.method)
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
    else if(req.method == "POST" && req.url.toLocaleLowerCase()==="/submit-details"){
        const body = [];
        req.on("data",(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
        })
        fs.writeFileSync("formdetails.txt","Form submitted");
        res.setHeader("Location","/");
        res.statusCode = 302;
        return res.end
    }
})

const PORT = 3000;
Srever.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})