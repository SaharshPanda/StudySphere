import expressAsyncHandler from "express-async-handler"
import coachactivities from "../models/coachActivitiesModel.js"

const courseDataController = expressAsyncHandler((async (req,res)=>{

    const emailId = req.params?.emailId ; 
    if (!emailId) {
        return res.status(400).json({ message: "Email ID is required" });
    }
    try{
          
        const courseData = await coachactivities.find()
        res.status(200).json({
            message: "Coach Data successfully received","data" : courseData
        });
    }
    catch(error){
        res.status(500).json({"message" : "Internal Server Error"})
    }
}))


export {courseDataController}