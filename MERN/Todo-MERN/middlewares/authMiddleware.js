const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try{
        //get token
        const token = req.headers['authorization'].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                return res.status(401).send({
                    success: false,
                    message: "Unauthorized User"
                });
            } else {
                req.userId = decoded.id;
                next(); 
            }
        }); 
    }
    catch(error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Unauthorized Access",
            error
        });
    }
}