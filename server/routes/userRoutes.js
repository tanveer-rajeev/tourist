import express from "express";
import {getUser,signup,signin,updateUser,deleteUser} from "../controllers/userController.js";
const userRouter = express.Router();


userRouter.post('/signup',signup);
userRouter.post('/signin',signin);


export default userRouter;