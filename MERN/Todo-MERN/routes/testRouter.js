const express = require('express');
const { testingController } = require('../controllers/testController');
const app = express();

//Router object
const router = express.Router();

//Routes
router.get('/',testingController);

//Export
module.exports = router;