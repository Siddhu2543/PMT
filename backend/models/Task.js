import mongoose from "mongoose";


const taskschema = new mongoose.Schema({
  taskTitle: {
    type: String,
    require: [true, "task name is required"],
  },
  type: {
    type: String,
    require: ["task name is required"],
  },
  deadline: {
    typr: Date,
    required: [true, "task deadline is required"],
  },
  Description: {
    typr: String,
    required: [true, "task description is required"],
  },
  project: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
  },
  task: {
    type: String,
    require: ["task is required"],
  },
});
const Task = mongoose.model("Task", taskschema);

module.exports = Task;
