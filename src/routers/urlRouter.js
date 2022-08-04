import { Router } from "express";
import { deleteUrlById, getUrlById, openShortUrl, postUrlShorten } from "../controllers/UrlsController.js";
import { ValidateSession } from "../middlewares/ValidateSession.js";
import { ValidateUrlEntrance } from "../middlewares/ValidateUrlEntrance.js";
import { ValidateUrlIdExistance } from "../middlewares/ValidateUrlIdExistance.js";

const router = Router();

router.post('/urls/shorten', ValidateUrlEntrance, ValidateSession, postUrlShorten);
router.get('/urls/:id', ValidateUrlIdExistance, getUrlById);
router.get('/urls/open/:shortUrl', openShortUrl);
router.delete('/urls/:id', deleteUrlById);

export default router;