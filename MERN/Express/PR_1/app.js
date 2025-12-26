const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hostRouter = require('./routes/host');
const userRouter = require('./routes/user');
const rootDir = require('./utils/PathUtil');

const app = express();




// app.use((req,res,next)=>{
//     console.log("First Middleware",req.url , req.method );
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("Second Middleware",req.url , req.method );
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("Second Middleware",req.url , req.method );
//     res.send('Hello from Express App');
// })

app.use(bodyParser.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.get((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});


// app.post('/contact-us',(req,res,next)=>{
//     console.log("First Handling",req.url , req.method , req.body );
//     next();
// });
const server = app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});