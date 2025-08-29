import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",    // Report ek patient se linked
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",     // Report likhne wala doctor
    required: true
  },
  diagnosis: {
    type: String,
    required: true
  },
  prescription: {
    type: String
  },
  reportDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export const Report = mongoose.model("Report", reportSchema);



// const reports = await Report.find()
//   .populate("patient")
//   .populate({
//     path: "patient",
//     populate: { path: "hospital" }
//   })
//   .populate("doctor");
