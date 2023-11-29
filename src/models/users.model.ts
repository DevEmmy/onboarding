import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    oldPassword: {type: String, required: false},
    username: {type: String, required: false, unique: true},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    profilePicture: {type: String, default: "https://www.nicepng.com/png/detail/914-9144016_avatar-pictures-anime-male-hair-reference.png"},

    following: [{type: Schema.Types.ObjectId, ref:"User"}],
    
    gender: String,
    dob: String,
    preferences: [{type: String}],
    pushNotification: {type: Boolean, default: false},
    userType: {type: Number, default: 0},

    resetCode: {type: Number}
})

const User = mongoose.model("User", userSchema);
export default User