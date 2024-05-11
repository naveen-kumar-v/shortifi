import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    unique: true
  }
})

const url = mongoose.model("url", urlSchema);

export default url;