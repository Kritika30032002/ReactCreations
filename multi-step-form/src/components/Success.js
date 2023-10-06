import React from 'react'
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Success = () => {
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
          <Typography variant="h6">
            Success
          </Typography>
        </AppBar>
      </Box>
      <div className='flex'>
      <h1>Thank You For Your Submission!</h1>
      <h3>You will get an email with further instructions.</h3>
      </div>
    </div>
  )
}

export default Success