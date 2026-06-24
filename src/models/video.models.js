import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    videoFile: {
        type: String, //will use cloudinary for storing videos
        required: true,
      },
      thumbnail: {
        type: String, //will use cloudinary for storing images
        required: true,
      },
      title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        index: true,
      },
      description: {
        type: String,
        required: [true, "Description is required"],
        
      },
      duration: {
        type: Number, //from cloudinary response we will get duration in seconds
        required: [true, "Duration is required"],
      },
      views: {
        type: Number,
        default: 0,
      },
      isPublished: {    
       type: Boolean,
         default: true,
        },
        



},{
    timestamps: true,
});



export const Video = mongoose.model("Video", videoSchema);