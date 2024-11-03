const generateToken = require('../../Utils/jwtUTILS');
class videosController{
    constructor(VideosRepo){
        this.videosRepo = VideosRepo;
    }

    async getVideos(){
        const VideosData = await this.videosRepo.getVideos();
        return VideosData;
    }

    async addVideo(NewVideo){
        const newVideo = await this.videosRepo.addVideo(NewVideo);
        return newVideo;
    }

    async getVideo(id){
        const video = await this.videosRepo.getVideoById(id);
        return video;
    }

    async findVideoAndUpdate(id , data){
        const existingVideo = await this.videosRepo.updateVideoById(id , data);
        return existingVideo;
    }

    async deleteVideo(id){
        const video = await this.videosRepo.deleteVideoById(id);
        return video;
    }


}

module.exports = videosController;