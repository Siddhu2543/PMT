import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    favSongs: {
      type: [String],
      default: [],
    },

    favPlaylists: {
      type: [String],
      default: [],
    },

    favArtists: {
      type: [String],
      default: [],
    },

    lastQueue: {
      type: String,
      default: "",
    },

    history: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
