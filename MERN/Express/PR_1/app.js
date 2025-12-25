const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const server = app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

app.use((req,res,next)=>{
    console.log("First Middleware",req.url , req.method );
    next();
})
app.use((req,res,next)=>{
    console.log("Second Middleware",req.url , req.method );
    next();
})
// app.use((req,res,next)=>{
//     console.log("Second Middleware",req.url , req.method );
//     res.send('Hello from Express App');
// })
app.get('/',(req,res,next)=>{
    console.log("Came in another middlewrare",req.url , req.method );
    res.send(`<h1>Welcome to Express App</h1>`);
});

app.get('/contact-us',(req,res,next)=>{
    console.log("Came in contact us GET middlewrare",req.url , req.method );
    res.send(`<h1>Contact Us Page</h1>
        <form action="/contact-us" method="POST">
        <input type="text" name="username" placeholder="Enter your name" />
        <input type="text" name="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
        </form>`);
});

app.post('/contact-us',(req,res,next)=>{
    console.log("First Handling",req.url , req.method , req.body );
    next();
});

app.use(bodyParser.urlencoded());

app.post('/contact-us',(req,res,next)=>{
    console.log("Came in contact us POST middlewrare",req.url , req.method , req.body );
    res.send('<h3>We will contact you soon!</h3>');
});
