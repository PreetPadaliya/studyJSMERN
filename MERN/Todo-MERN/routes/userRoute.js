const express = require('express');
const { registerController, loginController } = require('../controllers/userController');

//Router object
const router = express.Router();


//routes

//REGISTER USER || POST
router.post('/register',registerController);

//LOGIN USER || POST
router.post('/login',loginController);

//export
module.exports = router;