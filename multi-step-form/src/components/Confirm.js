import React from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Confirm = (props) => {
    const navigate = useNavigate();
    const next = () =>{
     let path = '/success'
     navigate(path)
    }
    const back = () => {
        let path = '/personal'
        navigate(path)
    }
  return (
    <div>
      <Box>
        <AppBar
          position="static"
          style={{
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <IconButton
            color="inherit"
            sx={{
              ml: "-504px",
              mr: "515px",
              borderRadius: "50%", // Make the button circular
              width: 48, // Set the width to make it equal to the height
              height: 48,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Confirm</Typography>
          
        </AppBar>
      </Box>
      <Grid id="cont" sx={{ width: "200px" }}>
        <Grid item className="grid-con">
        <Typography variant="h6" fontSize={20}>First Name:</Typography>
        <small style={{fontSize:"20px"}}>{props.formData.firstData}</small>
        </Grid>
        <Grid item className="grid-con">
          <Typography variant="h6" fontSize={20}>Last Name:</Typography>
          <small style={{fontSize:"20px"}}>{props.formData.lastData}</small>
        </Grid>
        <Grid item className="grid-con">
        <Typography variant="h6" fontSize={20}>Email:</Typography>
        <small style={{fontSize:"20px"}}>{props.formData.emailData}</small>
        </Grid>
        <Grid item className="grid-con">
        <Typography variant="h6" fontSize={20}>Occupation:</Typography>
        <small style={{fontSize:"20px"}}>{props.formData.occu}</small>
        </Grid>
        <Grid item className="grid-con">
        <Typography variant="h6" fontSize={20}>City:</Typography>
        <small style={{fontSize:"20px"}}>{props.formData.city}</small>
        </Grid>
        <Grid item className="grid-con">
        <Typography variant="h6" fontSize={20}>Bio:</Typography>
        <small style={{fontSize:"20px"}}>{props.formData.bio}</small>
        </Grid>
        <div className="grid-btn">
          <Grid item className="grid">
            <Button variant="contained" style={{width:"195px"}} onClick={next}>Confirm & Continue</Button>
          </Grid>
          <Grid item className="grid btns">
            <Button
              variant="contained"
              style={{ backgroundColor: "white", color: "black", marginLeft:"-30px" }}
              onClick={back}
            >
              Back
            </Button>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Confirm;
