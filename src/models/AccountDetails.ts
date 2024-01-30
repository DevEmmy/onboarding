import {Schema} from "mongoose";
import mongoose from "mongoose"

const schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    balance: {type: Number},
    accountNumber: {type: Number},
    accountName: {type: String},
    bankName: {type: String}
},
{
    timestamps: true
})

const Account = mongoose.model("Account", schema)
export default Account