const express = require("express");
const router = express.Router();
const  protect = require("../../Middlewares/IsAdmin");


const videoRoutes = (videoController)=>{
    router.get('/videos/' , async(req, res)=>{
        try{
            const videos = await videoController.getVideos();
            if(videos.length > 0)res.status(200).json({msg: "all videos are below" , videos})
                res.status(200).json({msg:"no videos found"})
        }catch(err){
            console.log(err);
            res.status(500).json({msg: "error while retriving the data" , err: err.message})
        }
    }); 
    router.get('/videos/:id' , async (req , res)=>{
        try{
            const id = req.params.id;
            const video = await videoController.getVideo(id);
            if(video){
                res.status(200).json({msg: "here is the video" , video})
            } else{
                res.status(200).json({msg:"video is not found"})
            }
        }catch(err){
            console.log(err);
            res.sendStatus(500).json({msg:"there is an error" , err: err.message});
        }
    });
    router.post('/videos/' , protect,async (req , res)=>{
        try{
            const body = req.body;
            const video = await videoController.addVideo(body);
            res.status(201).json({msg:"video is added successfully" , video});
        }catch(err){
            console.log(err);
            res.status(500).json({msg:"there is an error happened" , err: err.message})
        }
    });
    router.put('/videos/:id', protect ,async (req,res)=>{
        try{
            const id = req.params.id;
            const body = req.body;
            const video = await videoController.findVideoAndUpdate(id , body);
            if(video){res.status(200).json({msg:"updated!" , video});
        }else{
                res.status(200).json({msg:"video isn't found"});
            }
        }catch(err){
            console.log(err);
            res.status(500).json({msg:"there is an error" , err: err.message});
        }
    });
    router.delete('/videos/:id' , protect ,async (req,res)=>{
        
        try{
            const id = req.params.id;
        const video = await videoController.deleteVideo(id);
        const checkon = await videoController.getVideos();
        if(!checkon){
            res.status(200).json({msg:"deleted!"});
        }else{

              res.status(200).json({msg:"it's already deleted!"});

        }
        }catch(err){
            console.log(err);
            res.status(500).json({msg:"there is an error" , err:err.message})
        }
    });

    return router;

}

module.exports = videoRoutes;