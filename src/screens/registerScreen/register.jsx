import { Button, FormHelperText, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink, useNavigate } from "react-router-dom";
import AlertDialog from "../../components/alertDialog";
import doAxios, { baseUrl } from "../../Api/api";

const Register = () => {
  const schema = z.object({
    fullname: z.string().nonempty("Full name is required"),
    email: z.string().email(),
    password: z.string().min(6),
    cnfmPassword: z.string().min(6),
    role : z.string()
  });
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alert, setAlert] = useState({open : false, message : "", severity : ""})
  const [registerData, setRegisterData] = useState({ fullname: "", email: "", password: "", cnfmPassword: "", role : "student" });
  const {
    register,
    handleSubmit,
    setErrors,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    if(registerData?.password != registerData.cnfmPassword){
      setAlert((prev)=>({...prev, open : true,severity : "error", message : "Different passwords in both field" }))

    }else {
      setAlert((prev)=>({...prev,open : false, message : "", severity : "" }))
      setIsSubmitting(true)
      const payload = registerData
      const success = (data) => {
       setAlert((prev)=>({...prev,open : true, message : data?.data.message, severity : "success" }))
        setIsSubmitting(false)
        setTimeout(()=>{
          navigate("/")
  
        },[1000])
       }
        const error = (data) => {
         setAlert((prev)=>({...prev, open : true,severity : "error", message : data?.response?.data.message }))
         setIsSubmitting(false)
  
               }
         doAxios(baseUrl + "user/register" , "post", payload, success, error)
    }
  };
  return (
    <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{width : "100%", height : "100vh"}}>
      <Typography>Register</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={"column"} sx={{ border: "2px solid black", padding: "20px" }} spacing={2}>
          <Stack direction={"column"} alignItems={"flex-start"}>
          <Typography>Register as</Typography>
          <RadioGroup {...register("role")} row onChange={(e) => setRegisterData((prev) => ({ ...prev, role: e.target.value }))} defaultValue="student">
            <Stack direction={"row"} alignItems={"center"} spacing={0}>
              <Radio value="student" />
              <Typography>Student</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <Radio value="coach" />
              <Typography>Teacher or Mentor</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <Radio value="organisation" />
              <Typography>Organisation</Typography>
            </Stack>
          </RadioGroup>
          </Stack>
            
          <Stack direction={"column"} spacing={0} alignItems={"flex-start"}>
            <Typography>Full Name / Org Name</Typography>
            <TextField {...register("fullname")} type="text" size="small" onChange={(e) => setRegisterData((prev) => ({ ...prev, fullname: e.target.value }))} sx={{width:'100%'}}/>
            {errors.fullname && <FormHelperText sx={{ color: "red" }}>{errors.fullname.message}</FormHelperText>}
          </Stack>
          <Stack direction={"column"} spacing={0} alignItems={"flex-start"}>
            <Typography>Email</Typography>
            <TextField
              {...register(
                "email"
                // , {required : "Email is required", validate : (value)=> !value.includes("@") ? "Please enter a valid email" : true}
              )}
              type="text"
              size="small"
              sx={{width:'100%'}}
              onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
            />
            {errors.email && <FormHelperText sx={{ color: "red" }}>{errors.email.message}</FormHelperText>}
          </Stack>

          <Stack direction={"column"} spacing={0} alignItems={"flex-start"}>
            <Typography>Passsword</Typography>
            <TextField
              {...register(
                "password"
                // , {required : "Password is required", minLength : {
                // value : 9,
                // message : "Min 6 chars"
                // }}
              )}
              type="password"
              size="small"
              sx={{width:'100%'}}
              onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
            />
            {errors.password && <FormHelperText sx={{ color: "red" }}>{errors.password.message}</FormHelperText>}
          </Stack>
          <Stack direction={"column"} spacing={0} alignItems={"flex-start"}>
            <Typography>Confirm Passsword</Typography>
            <TextField {...register("cnfmPassword")} type="password" size="small" onChange={(e) => setRegisterData((prev) => ({ ...prev, cnfmPassword: e.target.value }))} sx={{width:'100%'}}/>
            {errors.cnfmPassword && <FormHelperText sx={{ color: "red" }}>{errors.cnfmPassword.message}</FormHelperText>}
          </Stack>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Loading" : "Submit"}
          </Button>
          <Stack direction="row" spacing={"4px"} alignItems="center" justifyContent={'center'}>
              <Typography variant="caption">Already a User?</Typography>
              <Typography variant="caption" color="blue">
                <NavLink to="/">Login</NavLink>
              </Typography>
            </Stack>
        </Stack>
      </form>
      <AlertDialog state={alert?.open} severity={alert?.severity} message={alert?.message} />
    </Stack>
  );
};

export default Register;
