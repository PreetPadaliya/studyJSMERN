const todoModel = require("../models/todoModel");

// CREATE TODO
const createTodoController = async(req, res) => {
    try {
        const { title, description, createdBy } = req.body;
        if(!title || !description){
            return res.status(500).send({
                success:false,
                message:'please provide title and description'
            })
        }
        const todo = new todoModel({title,description,createdBy})
        const result = await todo.save();
        res.status(201).send({
            success: true,
            message: "Todo created successfully",
            result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in creating todo",
            error
        }); 
    }
};

//GET TODO
const getTodoController = async(req, res) => {
    try {
        const {userId} = req.params
        //validate
        if(!userId){
            return res.status(404).send({
                success:false,
                message:'No user found with this id'
            });
        }
        //find task
        const todos = await todoModel.find({createdBy: userId});
        if(!todos){
            return res.status(404).send({
                success:true,
                message:'You have no todos'
            });
        }
        res.status(200).send({
            success:true,
            message:'Todos fetched successfully',
            todos
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting todo",
            error
        }); 
    }
}; 

module.exports = { createTodoController , getTodoController };