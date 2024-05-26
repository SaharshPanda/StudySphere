
import expressAsyncHandler from "express-async-handler"
import studentactivities from "../models/studentActivitiesModel.js";


const studentGeneralDataController = expressAsyncHandler(async (req,res) => {
    const emailId = req.params?.emailId ; 
    if (!emailId) {
        return res.status(400).json({ message: "Email ID is required" });
    }

    try {
        // Attempt to find the student detail in the database
        const studentDetail = await studentactivities.findOne({ email: emailId });
        res.status(200).json({
            message: "Student Data successfully received",
            course: studentDetail?.course,
            mentor  :  studentDetail?.mentor,
            "organisation" : studentDetail?.organisation
        });
    } catch (error) {
        // Log the error for debugging
        console.error("Error fetching student details:", error);

        // Respond with a 500 status and an error message
        res.status(500).json({ message: "Internal server error" });
    }

})

const studentNotesController = expressAsyncHandler(async (req,res)=>{
 const emailId = req.params?.emailId
 if(!emailId){
    return res.status(400).json({message:"Email ID is required"})
 }
 try{
const notesData = await studentactivities.findOne({email : emailId})
res.status(200).json({message : "Notes Data successfully retrieved",
    notes : notesData?.notes
})
 }
 catch(error){
res.status(500).json({"message" : "Internal Server Error"})
 }
})

const studentAchievementController = expressAsyncHandler(async (req,res)=>{
    const emailId = req.params?.emailId
    if(!emailId){
       return res.status(400).json({message:"Email ID is required"})
    }
    try{
   const achievementData = await studentactivities.findOne({email : emailId})
   res.status(200).json({message : "Acheivements Data successfully retrieved",
       achievements : achievementData?.achievements
   })
    }
    catch(error){
   res.status(500).json({"message" : "Internal Server Error"})
    }
   })


 

export {studentGeneralDataController,studentNotesController,studentAchievementController}