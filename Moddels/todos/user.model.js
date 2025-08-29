import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: [true, "its a require field"],
        unique: true,
        lowercase: true,
        min: [6, "minimum 6 letters allowed"],
        max: [20, "maximum 20 letters allowed"]
    },


    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: ture
    },


    password: {
        type: String,
        required: true,
        unique: true,
        min: [8, "minimum 8 character required"],
        max: [20, "use max 20 characters for your password"]
    },


},{timestamps: true});


export const User = mongoose.model("User", userSchema);