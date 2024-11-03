const jwt = require('jsonwebtoken');

const generateToken = (userID)=>{
    return jwt.sign({id:userID}, "Jwt_Secret_key", {
        expiresIn: "1h",

    });
}

module.exports = generateToken;