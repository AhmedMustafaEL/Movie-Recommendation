const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    movieName:{
        type:String,
        required:true,
    },
    releaseDate:{
        type:Number,
        required:true,
        max:50000,
        min:0,
    },
    time:{
        type: Number,
        required: true,
    },
    imageName:{
        type:String,
        required:true,
    },
    videoType:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Videos" , VideoSchema);