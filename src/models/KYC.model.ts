import {Schema} from "mongoose";
import mongoose from "mongoose"

const schema = new Schema({
    
},
{
    timestamps: true
})

const KYC = mongoose.model("KYC", schema)
export default KYC