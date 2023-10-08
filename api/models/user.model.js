import mongoose, { model } from "mongoose";

// defining rules
const userSchema = new mongoose.Schema(
  {
    username: {
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
  },
  { timestamps: true }
);

//creating the model it will automatically change user to users when there are more than 1 users
const User = mongoose.model("User", userSchema);

export default User;
