
//External Module
const express = require('express');

//Local Module
const requestHandler = require('./ParsingReq');

const app = express();

// app.use((req,res,next)=>{
//     console.log("First Middleware",req.url , req.method );
//     next();
// });

app.get('/',(req,res,next)=>{
    console.log("Came in first middlewrare",req.url , req.method );
    next();
});

app.post('/submit-details',(req,res,next)=>{
    console.log("Came in second middlewrare",req.url , req.method );
    res.send('Form Submitted Successfully');
});

app.get('/',(req,res,next)=>{
    console.log("Came in another middlewrare",req.url , req.method );
    res.send('<h1>Welcome to Express App</h1>');
});

// app.use((req,res,next)=>{
//     console.log("Second Middleware",req.url , req.method );
//     res.send('Hello from Express App');
// });

// const Srever = http.createServer(app); // Using Express app as request handler , (req,res)

    const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})