import mongoose from "mongoose";


const roleschema = new mongoose.Schema({
  rolename: {
    type: String,
    require: [true, "Role name is required"],
  },
  package: {
    type: Number,
    required: [true, "Package is required"]
  },
  Description: {
    typr: String,
    required: [true, "Role description is required"],
  },
});
const Role = mongoose.model("Role", roleschema);

module.exports = Role;
