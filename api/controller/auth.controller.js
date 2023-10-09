import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

//Craeating a function that uses model to create a user in a database
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("New user was created");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
