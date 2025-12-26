const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/PathUtil');

hostRouter.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});

hostRouter.post('/contact-us',(req,res,next)=>{
    console.log("Handling Contact Us POST request");
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'contactResponse.html'));
});

module.exports = hostRouter;