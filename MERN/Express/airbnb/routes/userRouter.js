const path = require('path'); // Core module
const express = require('express'); // External module
const userRouter = express.Router(); 


// Define routes for userRouter here

userRouter.get("/",(req,res,next)=>{  
    res.sendFile(path.join(__dirname,'../' ,'views','home.html'));
});

module.exports = userRouter;