import express from 'express';
import 'dotenv/config.js';
import { connectToDB } from './config/Database.js';
import urlRouter from './routes/Url.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/", urlRouter);

app.listen(port, () => console.log("App started at port : ", port));

connectToDB();