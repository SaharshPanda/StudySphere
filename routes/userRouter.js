import express from "express"
import { authorizationController, loginUserController, registerUserController } from "../controllers/userController.js"; 
const userRouter = express.Router();

userRouter.post("/register", registerUserController);

userRouter.post("/login", loginUserController);

userRouter.post("/roleAuthorization", authorizationController);

export default userRouter