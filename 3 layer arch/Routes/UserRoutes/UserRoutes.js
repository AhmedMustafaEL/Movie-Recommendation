const express = require("express");
const router = express.Router();

const userRoutes = (UserController)=>{
    router.post('/register/' , async (req,res)=>{
        try{
            const body = req.body;
            const regUser = await UserController.userRegister(body);
            res.status(200).json({msg:"user registered successfully!" , regUser})
        }catch(err){
            console.log(err);
            res.status(500).json({msg:"there is an error hapopened", err:err.message});
        }
    });

    router.post('/login/' , async (req,res)=>{
        try{
            const body = req.body;
            const token = await UserController.userLogin(body);
            if( token !== "invalid user or password"){
                res.status(200).json({msg:"user logedin successfully!" , token});
            }else{
                res.status(200).json({msg:"invaild user or password"});
            }
        }catch(err){
            console.log(err);
            res.status(500).json({err: err.message});
        }
    })

    return router;

}

module.exports = userRoutes;