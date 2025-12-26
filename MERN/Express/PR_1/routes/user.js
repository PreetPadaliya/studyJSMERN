
const express = require('express');
const userRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/PathUtil');

userRouter.get('/',(req,res,next)=>{
    console.log("Handling Home GET request");
    console.log(req.url, req.method);
    res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports = userRouter;