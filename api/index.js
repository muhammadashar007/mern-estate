import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(
    "mongodb+srv://ash:ash@cluster0.da4kcd0.mongodb.net/mern-estate?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("The Server is connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("This port is working");
});
