import { Button, FormHelperText, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const Login = () => {

    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
      });

    const [loginData, setLoginData] = useState({ email : "", password : ""})
    const {register, handleSubmit,setErrors,formState : {errors,isSubmitting}} = useForm({ resolver: zodResolver(schema)})

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);    }
  return (
    <>
<Typography>Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={"column"} sx={{border : '2px solid black', padding : "20px"}} spacing={2}>
          <Stack direction={"column"} spacing={0} alignItems={"flex-start"}>
            <Typography>Email</Typography>
            <TextField {...register("email"
            // , {required : "Email is required", validate : (value)=> !value.includes("@") ? "Please enter a valid email" : true}
        )} 
            type="text" size="small" onChange={(e)=>setLoginData((prev)=>({...prev, email : e.target.value}))}/>
            {errors.email && <FormHelperText sx={{color:"red"}}>{errors.email.message}</FormHelperText>}
          </Stack>

          <Stack direction={"column"} spacing={0}  alignItems={"flex-start"}>
            <Typography>Passsword</Typography>
            <TextField {...register("password"
            // , {required : "Password is required", minLength : {
                // value : 9,
                // message : "Min 6 chars"
            // }}
            )} type="password" size="small" onChange={(e)=>setLoginData((prev)=>({...prev, password : e.target.value}))}/>
            {errors.password && <FormHelperText sx={{color:"red"}}>{errors.password.message}</FormHelperText>}
          </Stack>
          <Button type="submit" variant="contained" disabled={isSubmitting}>{isSubmitting ? "Loading" : "Submit"}</Button>
        </Stack>
      </form>
    </>
  );
};

export default Login;
