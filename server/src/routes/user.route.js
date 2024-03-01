import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";


const router = Router();

router.route('/').get(registerUser)


export default router
