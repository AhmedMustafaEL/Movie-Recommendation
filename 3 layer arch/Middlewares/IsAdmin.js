const jwt = require("jsonwebtoken");
const UserRepo = require('../Repositories/UserRepo/UserRepo');

const protect = async (req,res,next)=>{
    let token;
    if(req.headers.token){
        token = req.headers.token;
        try{
            const decodedTokken = jwt.verify(token, "Jwt_Secret_key");
            const userRepo = new UserRepo();
            const user = await userRepo.GetUserById(decodedTokken.id);
            if (user?.email === "mahmoudmahran10@hotmail.com"){
                next();
            }else{
                return res.status(403).json({msg:"access denied , unauthorized email"});
            }
        }catch(err){
            console.log(err);
            return res.status(401).json({msg:"not authorized token failed"})
        }

    }else{
        return res.status(403).json({msg:"not authorized, no token provided"})
    }
}

module.exports = protect;