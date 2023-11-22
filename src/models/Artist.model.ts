import {Schema} from "mongoose";
import mongoose from "mongoose"

const schema = new Schema({
    cover: {type: String},
    artistName: {type: String, required: true},
    followers: [{type: Schema.Types.ObjectId, ref:"User"}],
    genres : [{type: String}],
    spotify: String,
    ig: String,
    twitter: String,
    facebook: String,
    apple: String,
    user: {type: Schema.Types.ObjectId, ref: "User"}
},
{
    timestamps: true
})

const Artist = mongoose.model("Artist", schema)
export default Artist