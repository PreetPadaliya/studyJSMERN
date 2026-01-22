const express = require('express');
const { createTodoController } = require('../controllers/todoController');
const router = express.Router();

router.post('/create', createTodoController);

module.exports = router;