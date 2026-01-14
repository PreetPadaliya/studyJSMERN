const express = require('express');
const morgan = require('morgan');
const dotenv =  require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//config dotenv
dotenv.config();

//database connection

connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//routes
app.use('/api/v1/test',require('./routes/testRouter'));

//listen to a port
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
