import {Schema} from "mongoose";
import mongoose from "mongoose"

const schema = new Schema({
    file: {type: String, required: true},
    price: {type: Number},
    spotify: String,
    appleMusic: String,
    artist: {type: Schema.Types.ObjectId, ref: "Artist"},
    active: {type: Boolean, default: false},
    cover: {type: String},
    listens: [{type: Schema.Types.ObjectId, ref: "User"}],
    genres: [{type: String}],
    type: {type: String},
    budget: {type: Number},
    amountToDisburse: {type: Number},
},
{
    timestamps: true
})

const Song = mongoose.model("Song", schema)
export default Song