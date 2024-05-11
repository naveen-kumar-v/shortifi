import express from 'express';
import { getShortUrl, goToShortUrl } from '../controllers/Url.js';


const urlRouter = express.Router();

urlRouter.post('/url', getShortUrl)
urlRouter.get('/:shortId', goToShortUrl)

export default urlRouter;