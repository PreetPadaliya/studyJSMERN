const express = require('express');
const { registerController } = require('../controllers/userController');

//Router object
const router = express.Router();


//routes

//REGISTER USER || POST
router.post('/register',registerController);



//export
module.exports = router;