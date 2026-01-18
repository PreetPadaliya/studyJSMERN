const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

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
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //save user
        const newUser = new userModel({ username, email, password:hashedPassword });
        console.log("New User:", newUser);
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

//LOGIN
const loginController =async(req, res) => {
    try {
        const {email, password} = req.body;
        //validation
        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:"Please provide all required fields"
            });
        }
        //check user
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(401).send({
                success:false,
                message:"Invalid email or password"
            });
        }
        //match password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).send({
                success:false,
                message:"Invalid credentials"
            });
        }
        //token
        const token = await JWT.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'1d'});  
        res.status(200).send({
            success:true,
            message:"User logged in successfully",
            token,
            user:{
                email: user.email,
                username: user.username,
                id: user._id,
            }
        });  
    } catch (error) {
        console.log("Error in user login", error);
        res.status(500).send({
            success: false,
            message: "Error in user login",
            error
        });
        
    }

}

module.exports = { registerController, loginController };