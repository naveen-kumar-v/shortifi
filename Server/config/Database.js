import mongoose from "mongoose";
import 'dotenv/config.js';

export const connectToDB = () => {
  const url = process.env.DATAbASE_URL;

  const conn = mongoose.connect(url);

  conn ? console.log("DB Connected succesfully") : console.log("Error while connecting.")
} 
