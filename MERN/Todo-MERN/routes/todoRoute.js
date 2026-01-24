const express = require('express');
const { createTodoController } = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createTodoController);

module.exports = router;