import mongoose from "mongoose";

import bcrypt from "bcrypt";

const userschema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "firstname is required"],
  },
  lastname: {
    type: String,
    required: [true, "lastname is required"],
  },
  profilePhoto: {
    type: String,
    default:
      "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg",
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  onLeave: {
    type: Boolean,
  },
  workStatus: Boolean,
  password: {
    type: String,
    required: [true, "password is required"],
  },
});
//password encryption
userschema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
//match password
userschema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model("User", userschema);

//module.exports = User;
export default User;