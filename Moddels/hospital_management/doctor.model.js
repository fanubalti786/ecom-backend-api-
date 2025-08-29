import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    specialization: {
    type: String,
    required: true
  },

  phone: {
    type: String
  },

    salary: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    experienceInYears: {
      type: Number,
      required: true,
    },

    worksInHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
      },
    ],
  },
  { timestampe: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
