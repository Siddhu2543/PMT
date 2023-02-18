import mongoose from "mongoose";

const projectschema = new mongoose.Schema({
  Projectname: {
    type: String,
    require: [true, "project name is required"],
  },
  Details: {
    type: String,
    required: [true, "project details is required"],
  },
  Deadline: {
    type: Date,
    required: [true, "project deadline is required"],
  },
  Status: {
    type: String,
    required: [true, "project status is required"],
  },
  Description: String,
});
const Project = mongoose.model("Project", projectschema);

module.exports = Project;
