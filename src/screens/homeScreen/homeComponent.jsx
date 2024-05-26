import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

const HomeComponent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (

    
    <>
      {/* <Stack direction={'column'} justifyContent= {'flex-start'} alignItems={"flex-start"} sx={{width:"100%"}}> */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            height: 100,
          },
        }}
      >
        {/* <Paper elevation={3}>
        <Stack spacing={2} sx={{padding:"20px"}} alignItems={"center"} >

        <Typography><b>Thought of the day</b></Typography>
        <Typography><i>Where there is a will, there is a way.</i></Typography>
        </Stack>
        </Paper> */}
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Item>
              <Stack spacing={2} sx={{ padding: "20px" }} alignItems={"center"}>
                <Typography>
                  <b>Thought of the day</b>
                </Typography>
                <Typography sx={{color : "red"}}>
                  <i>"Where there is a will, there is a way"</i>
                </Typography>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12}  >
            <Item sx={{height:'20vh'}}>My Courses</Item>
          </Grid>
          <Grid item xs={12}>
            <Item sx={{height:'20vh'}}>My Mentors</Item>
          </Grid>
          <Grid item xs={12}>
            <Item sx={{height:'20vh'}}>Announcements</Item>
          </Grid>
        </Grid>
      </Box>
      {/* </Stack> */}
    </>
  );
};

export default HomeComponent;
