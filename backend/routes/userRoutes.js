import express from 'express'
import { resgisterUser, signIn } from '../controller/userController.js';


const router=express.Router();

router.post('/register',resgisterUser)
router.post("/login", signIn);

export default router;