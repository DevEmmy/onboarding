import {Schema} from "mongoose";
import mongoose from "mongoose"

const schema = new Schema({
    file: {type: String, required: true},
    price: {type: Number},
    spotify: String,
    artist: {type: Schema.Types.ObjectId, ref: "Artist"}
},
{
    timestamps: true
})

const Song = mongoose.model("Song", schema)
export default Song