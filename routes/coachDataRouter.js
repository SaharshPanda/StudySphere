import express from "express"
import { courseDataController } from "../controllers/coachRoleController.js";
const coachDataRouter = express.Router();

coachDataRouter.get("/courseData/:emailId", courseDataController);


export default coachDataRouter