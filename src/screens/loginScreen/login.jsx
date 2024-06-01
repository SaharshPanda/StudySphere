import { Button, FormHelperText, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink, useNavigate } from "react-router-dom";
import doAxios, { baseUrl } from "../../Api/api";
import AlertDialog from "../../components/alertDialog";


const Login = () => {

    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
      });
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loginData, setLoginData] = useState({ email : "", password : ""})
    const {register, handleSubmit,setErrors,formState : {errors}} = useForm({ resolver: zodResolver(schema)})
   const navigate = useNavigate()
   const [alert, setAlert] = useState({open : false, message : "", severity : ""})
    const onSubmit = (data) => {
      setAlert((prev)=>({...prev,open : false, message : "", severity : "" }))

      setIsSubmitting(true)
       const payload = loginData
       const success = (data) => {
        setAlert((prev)=>({...prev,open : true, message : data?.data.message, severity : "success" }))
         setIsSubmitting(false)
         setTimeout(()=>{
           navigate("/home")

         },[1000])
        }
         const error = (data) => {
          setAlert((prev)=>({...prev, open : true,severity : "error", message : data?.response?.data.message }))
          setIsSubmitting(false)

                }
          doAxios(baseUrl + "user/login" , "post", payload, success, error)
       }
  return (
    <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{width : "100%", height : "100vh"}}>
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
          <Stack direction="row" spacing={"4px"} alignItems="center" justifyContent={'center'}>
              <Typography variant="caption">New User?</Typography>
              <Typography variant="caption" color="blue">
                <NavLink to="/register">Register</NavLink>
              </Typography>
            </Stack>
        </Stack>
      </form>
       <AlertDialog state={alert?.open} severity={alert?.severity} message={alert?.message} />

    </Stack>
  );
};

export default Login;
