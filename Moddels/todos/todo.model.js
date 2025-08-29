import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    complete: {
        type: String,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]
},{timestamps: ture})

export const Todo = mongoose.model("Todo", todoSchema);