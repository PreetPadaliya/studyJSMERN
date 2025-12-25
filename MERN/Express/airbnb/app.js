const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();

app.use(bodyParser.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000');
});