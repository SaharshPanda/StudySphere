import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from 'react'

const Catalog = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (
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
        <Grid item xs={12}  >
            <Item sx={{height:'20vh'}}>All Streams</Item>
          </Grid>
          <Grid item xs={12}  >
            <Item sx={{height:'20vh'}}>All Courses</Item>
          </Grid>
          <Grid item xs={12}>
            <Item sx={{height:'20vh'}}>All Teachers</Item>
          </Grid>
          <Grid item xs={12}>
            <Item sx={{height:'20vh'}}>All Organization</Item>
          </Grid>
        </Grid>
      </Box>
  )
}

export default Catalog