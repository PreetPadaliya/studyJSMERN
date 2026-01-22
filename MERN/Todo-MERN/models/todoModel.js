const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    userId: {   
        ref: 'users',
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },

}, { timestamps: true });

const todoModel = mongoose.model('Todo', todoSchema);
module.exports = todoModel;