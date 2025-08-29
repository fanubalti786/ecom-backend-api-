import mongoose from "mongoose";
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    diagnosedWith: {
        type: String,
        required: true
    }
},{timestampe: true})


export const Hospital = mongoose.model("Hospital", hospitalSchema);