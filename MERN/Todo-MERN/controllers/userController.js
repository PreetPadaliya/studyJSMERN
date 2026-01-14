const userModel = require("../models/userModel");

const registerController = async(req, res) => {
    try {
        console.log("BODY:", req.body);

        const { username, email, password } = req.body;
        //validation
        if (!username || !email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please provide all required fields"
            });
        }
        //check existing user
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(409).send({
                success:false,
                message:"User already registered. Please login."
            });
        }
        //save user
        const newUser = new userModel({ username, email, password });
        await newUser.save();
        res.status(201).send({
            success: true,
            message: "User registered successfully",
            newUser,
        });
    } catch (error) {
        console.log("Error in user registration", error);
        res.status(500).send({
            success: false,
            message: "Error in user registration",
            error
        });
    }
};

module.exports = { registerController };