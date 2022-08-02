import { Router } from "express";
import { deleteUrlById, getUrlById, openShortUrl, postUrlShorten } from "../controllers/UrlsController";

const router = Router();

router.post('/urls/shorten', postUrlShorten);
router.get('/urls/:id', getUrlById);
router.get('/urls/open/:shortUrl', openShortUrl);
router.delete('/urls/:id', deleteUrlById);

export default router;