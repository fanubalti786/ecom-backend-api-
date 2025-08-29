import mongoose from "mongoose";
const medicalRecordSchema = new mongoose.Schema({
    
},{timestampe: true})


export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);