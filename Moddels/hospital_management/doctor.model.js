import mongoose from "mongoose";
const doctoreSchema = new mongoose.Schema({
    
},{timestampe: true})


export const Doctore = mongoose.model("Doctore", doctoreSchema);