import express from 'express';
import { getShortUrl, goToShortUrl, getAnalytics } from '../controllers/Url.js';


const urlRouter = express.Router();

urlRouter.post('/url', getShortUrl)
urlRouter.get('/:shortId', goToShortUrl)
urlRouter.get('/analytics/:shortId', getAnalytics)

export default urlRouter;