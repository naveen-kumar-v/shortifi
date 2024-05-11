import express from 'express';
import 'dotenv/config.js';
import { connectToDB } from './config/Database.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => console.log("App started at port : ", port));

connectToDB();