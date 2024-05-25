
import expressAsyncHandler from "express-async-handler"
import userdatas from "../models/userModel.js"
import jwt from "jsonwebtoken"
import roleauthorizations from "../models/roleAuthorization.js";
import { decode } from "punycode";

const registerUserController = expressAsyncHandler( async (req,res) => {
    const {fullname,email, password, role} = req.body;
    if (!fullname || !email || !password || !role) {
        res.status(400);
        throw new Error({ Message: "All fields are mandatory" });
      }

      const existingUser = await userdatas.findOne({email})
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
        const createUser = await userdatas.create(userObject)
        res.status(200).json({"user" : createUser,
        "message" : "Registration Successfull"})
      
    }
});

const loginUserController = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const registeredUser = await userdatas.findOne({email})
  if (!email || !password) {
    res.status(400);
    throw new Error({ Message: "All fields are mandatory" });
  }
  if(registeredUser && registeredUser.password === password && registeredUser.
    enabled === "true") {
  //   const accessToken = jwt.sign(
  //     {
  //         userdatas : {
  //             fullname : registeredUser.fullname,
  //             email : registeredUser.email,
  //             id : registeredUser.id

  //         },
  //     }, process.env.ACCESS_TOKEN_SECRET,{
  //         expiresIn : '30m'
  //     }
  // );

  const accessToken = jwt.sign({registeredUser},process.env.ACCESS_TOKEN_SECRET,{expiresIn  : "30m"})
    res.status(200).json({"message": "Successfully logged in",
  "accessToken" : accessToken})
  }
  else{
    res.status(400).json({message: "Failed to authenticate"})
  }
  res.status(200).json({ logindata: req.body });
});

const authorizationController = expressAsyncHandler(async (req,res) => {
  const {token} =  req.body;

  if(!token) {
    return res.status(400).json({ message: 'Token is required' });
  }
  const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
  const {email, role} = decoded.registeredUser
  const userDetails = await userdatas.findOne({email})
  const roleDetails = await roleauthorizations.findOne({role})
  console.log("first",decoded.registeredUser.email,userDetails,roleDetails,role,roleauthorizations)
  res.status(200).json({"user" : userDetails, "role" : roleDetails})
})
 

export {registerUserController ,loginUserController, authorizationController}