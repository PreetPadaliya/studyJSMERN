const mongoose = require('mongoose');

const connetctDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${mongoose.connection.host}`);
    }
    catch(error){
        console.log("Error in DB connection",error);        
    }
}
module.exports = connetctDB;