const Videos = require('../../Models/VideosModel/VideosModel');
class VideosRepo{
    constructor(){}
    
    async getVideos(){
        const videos = await Videos.find();
        if(videos.length > 0 ) return videos;
    }

    async addVideo(videoData){
        const newVideo = new Videos(videoData);
        await newVideo.save();
        return newVideo;
    }

    async getVideoById(id){
        const video = await Videos.findById(id);
        if (video) {
            return video;
        }
    }

    async updateVideoById(id , data){
        const video = await Videos.findByIdAndUpdate(id, data, {new:true});
        if(video){
            return video;
        }
    }

    async deleteVideoById(id){
        const video = await Videos.findByIdAndDelete(id);
        return video;
    }

}

module.exports = VideosRepo;
