import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//we use pre hook to hash the password before saving it to the database

const userSchema = new Schema({
      username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
      },

      fullName: {
        type: String,
        required: [true, "Full name is required"],
        trim: true,
        index: true,
      },
         avatar: {
        type: String, //will use cloudinary for storing images
        required: true,

        
      },
      
      coverImage: {
        type: String, //will use cloudinary for storing images
      },

      watchHistory: [{  
        type: Schema.Types.ObjectId,
        ref: "Video",
      }],
      password: {
        type: String,
        required: [true, "Password is required"],
      },
      refreshToken: {
        type: String,
      },


},{
    timestamps: true,
});

userSchema.pre("save", async function (next) {// not using call back because it does not know the reference of this keyword
    if (!this.isModified("password")) return next(); //if password is not modified then we don't need to hash it again{
        this.password = await bcrypt.hash(this.password, 10);
         next(); //need to learn for this
    }
);
videoSchema.plugin(mongooseAgregatePipline);


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}


userSchema.methods.generateAccessToken = function () {
    return jwt.sign({ _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName,
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
    });
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({ _id : this._id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
    });
}

export const User = mongoose.model("User", userSchema);


//jwt is a bearer token which is used for authentication and authorization
