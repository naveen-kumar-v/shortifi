import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true
  },
  redirectUrl: {
    type: String,
    required: true
  },
  visitedHistory: [{ timestamp: { type: Number } }]
},
  { timestamps: true })

const url = mongoose.model("url", urlSchema);

export default url;