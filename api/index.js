import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("The Server is connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("This port is working");
});

app.get("/", (req, res) => {
  res.json({
    messages: "Aaaaha it's working",
  });
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
