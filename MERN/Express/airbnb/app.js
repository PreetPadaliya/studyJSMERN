const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/PathUtil');

const app = express();

app.use(bodyParser.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir,'public')));

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000');
});