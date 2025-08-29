import mongoose from "mongoose";
const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    diagnosedWith: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    age: {
      type: String,
      required: true,
    },

    bloodGroup: {
      type: String,
      enum: ["A", "B", "O", "AB"],
      required: true,
    },

    gender: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },

    addmittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },

    doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",     // Patient ka assigned doctor
    required: true
  }

  },
  { timestampe: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
