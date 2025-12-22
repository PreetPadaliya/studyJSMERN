//Core Module
const http = require('http');

//External Module
const express = require('express');

//Local Module
const requestHandler = require('./ParsingReq');

const app = express();

app.use((req,res,next)=>{
    console.log("First Middleware",req.url , req.method );
    next();
});
app.use((req,res,next)=>{
    console.log("Second Middleware",req.url , req.method );
    res.send('Hello from Express App');
});

const Srever = http.createServer(app); // Using Express app as request handler , (req,res)

    const PORT = 3000;
Srever.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})