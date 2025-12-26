const path = require('path'); // Core module
const express = require('express'); // External module
const userRouter = express.Router(); 
const rootDir = require('../utils/PathUtil'); // Local module

// Define routes for userRouter here

userRouter.get("/",(req,res,next)=>{  
    res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports = userRouter;