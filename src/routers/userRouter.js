import { Router } from 'express';
import { getRanking, getUsersMe, postSignin, postSignup } from '../controllers/UserController.js';

const router = Router();

router.post('/signup', postSignup);
router.post('/signin', postSignin);
router.get('/users/me', getUsersMe);
router.get('ranking', getRanking);

export default router;