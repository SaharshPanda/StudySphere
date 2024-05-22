import { Button, FormHelperText, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const Register = () => {

    const schema = z.object({
      fullName : z.string().nonempty("Full name is required"),
        email: z.string().email(),
        password: z.string().min(6),
        cnfmPassword : z.string().min(6)
      });

    const [registerData, setRegisterData] = useState({ fullName : "", email : "", password : "" , cnfmPassword  : ""})
    const {register, handleSubmit,setErrors,formState : {errors,isSubmitting}} = useForm({ resolver: zodResolver(schema)})

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);    }
  return (
    <>
<Typography>Register</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={"column"} sx={{border : '2px solid black', padding : "20px"}} spacing={2}>
        <Stack direction={"column"} spacing={0} alignItems={"flex-start"}>
            <Typography>Full Name</Typography>
            <TextField {...register("fullName"
        )} 
            type="text" size="small" onChange={(e)=>setRegisterData((prev)=>({...prev, fullName : e.target.value}))}/>
            {errors.fullName && <FormHelperText sx={{color:"red"}}>{errors.fullName.message}</FormHelperText>}
          </Stack>
          <Stack direction={"column"} spacing={0} alignItems={"flex-start"}>
            <Typography>Email</Typography>
            <TextField {...register("email"
            // , {required : "Email is required", validate : (value)=> !value.includes("@") ? "Please enter a valid email" : true}
        )} 
            type="text" size="small" onChange={(e)=>setRegisterData((prev)=>({...prev, email : e.target.value}))}/>
            {errors.email && <FormHelperText sx={{color:"red"}}>{errors.email.message}</FormHelperText>}
          </Stack>

          <Stack direction={"column"} spacing={0}  alignItems={"flex-start"}>
            <Typography>Passsword</Typography>
            <TextField {...register("password"
            // , {required : "Password is required", minLength : {
                // value : 9,
                // message : "Min 6 chars"
            // }}
            )} type="password" size="small" onChange={(e)=>setRegisterData((prev)=>({...prev, password : e.target.value}))}/>
            {errors.password && <FormHelperText sx={{color:"red"}}>{errors.password.message}</FormHelperText>}
          </Stack>
          <Stack direction={"column"} spacing={0}  alignItems={"flex-start"}>
            <Typography>Confirm Passsword</Typography>
            <TextField {...register("cnfmPassword"
            )} type="password" size="small" onChange={(e)=>setRegisterData((prev)=>({...prev, cnfmPassword : e.target.value}))}/>
            {errors.cnfmPassword && <FormHelperText sx={{color:"red"}}>{errors.cnfmPassword.message}</FormHelperText>}
          </Stack>
          <Button type="submit" variant="contained" disabled={isSubmitting}>{isSubmitting ? "Loading" : "Submit"}</Button>
        </Stack>
      </form>
    </>
  );
};

export default Register;
