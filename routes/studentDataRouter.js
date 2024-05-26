import express from "express"
import { studentAchievementController, studentGeneralDataController, studentNotesController } from "../controllers/studentRoleController.js";
const studentDataRouter = express.Router();

studentDataRouter.get("/generalData/:emailId", studentGeneralDataController);

studentDataRouter.get("/notesData/:emailId", studentNotesController);

studentDataRouter.get("/achievementData/:emailId", studentAchievementController);

export default studentDataRouter