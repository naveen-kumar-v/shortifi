// import mongoose from "mongoose"; 
import { nanoid } from 'nanoid';
import url from '../models/Url.js';

export const getShortUrl = async (req, res) => {
  try {
    const body = req.body;
    console.log("body : ", body);
    if (!body.url) {
      return res.status(400).json({
        success: false,
        message: "URL is required."
      })
    }

    const shortID = nanoid(8);

    const toUrl = body.url.startsWith('http://') || body.url.startsWith('https://') ? body.url : `https://${body.url}`;

    const newId = await url.create({
      shortId: shortID,
      redirectUrl: toUrl,
      visitedHistory: []
    })

    return res.status(201).json({
      success: true,
      message: "Successfully created a short ID.",
      data: newId
    })
  }
  catch (err) {
    console.log("Error : ", err.message);
    res.status(400).json({
      success: false,
      message: "Error while shortening the url."
    })
  }
}


export const goToShortUrl = async (req, res) => {
  try {
    const { shortId } = req.params;

    const entry = await url.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitedHistory: {
            timestamp: Date.now(),
          }
        }
      },
      { new: true }
    );

    if (!entry) {
      console.log("No URL found for this shortId:", shortId);
      return res.status(404).json({
        success: false,
        message: `No URL found for this shortId: ${shortId}`,
      });
    }

    res.redirect(entry?.redirectUrl);

  } catch (err) {
    console.log("Error:", err);
    res.status(400).json({
      success: false,
      message: "Error while redirecting to the original URL.",
    });
  }
};


