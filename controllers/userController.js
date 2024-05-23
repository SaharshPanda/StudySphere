
import expressAsyncHandler from "express-async-handler"
import userData from "../models/userModel.js"

const registerUserController = expressAsyncHandler( async (req,res) => {
    const {fullname,email, password, role} = req.body;
    if (!fullname || !email || !password || !role) {
        res.status(400);
        throw new Error({ Message: "All fields are mandatory" });
      }

      const existingUser = await userData.findOne({email})
      if(existingUser){
        res.status(400).json({"message" : "User already registered!"});
      }
      else {
        const userObject = {
          fullname,
          email,
          password,
          enabled: true, 
          role,
        };
        const createUser = await userData.create(userObject)
        res.status(200).json({"user" : createUser,
        "message" : "Registration Successfull"})
      
    }
})


export {registerUserController}