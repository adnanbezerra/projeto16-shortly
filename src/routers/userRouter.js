import { Router } from 'express';
import { getRanking, getUsersMe, postSignin, postSignup } from '../controllers/UserController.js';
import { ValidateLoginCompatibility } from '../middlewares/ValidateLoginCompatibility.js';
import { ValidateLoginData } from '../middlewares/ValidateLoginData.js';
import { ValidateNewUserData } from '../middlewares/ValidateNewUserData.js';
import { ValidateNewUserEmail } from '../middlewares/ValidateNewUserEmail.js';

const router = Router();

router.post('/signup', ValidateNewUserData, ValidateNewUserEmail, postSignup);
router.post('/signin', ValidateLoginData, ValidateLoginCompatibility, postSignin);
router.get('/users/me', getUsersMe);
router.get('ranking', getRanking);

export default router;