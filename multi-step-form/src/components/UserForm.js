import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Moon from '../../public/moon.png'
// import Sun from '../../public/sun.png'
const UserForm = (props) => {
  const navigate = useNavigate();
  const routeChange = (e) => {
    e.preventDefault();
    if (props.formData.firstData === "" || props.formData.secondData === "" || props.formData.emailData === "") {
      alert("Please enter complete details");
    } else {
      let path = "/personal";
      navigate(path);
    }
    // let path = "/personal";
    // navigate(path);
  };
  const change = () => {
    const body = document.getElementById('body')
    props.setClick(prev => prev+1)
    if(props.click%2===0){
      body.style.backgroundColor = "black"
      body.style.color = "white"
    }else{
      body.style.backgroundColor = "white"
      body.style.color = "black"
    }
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
          <Typography variant="h6">Enter User Details</Typography>
          <IconButton sx={{ml:"100px", borderRadius: "50%",width: 48, // Set the width to make it equal to the height
              height: 48}}>
          {props.click%2===0 ?<img src={process.env.PUBLIC_URL + '/moon.png'} alt="There is a" style={{height:20, width:20,marginLeft:"2px"}} onClick={change}/>:
          <img src={process.env.PUBLIC_URL + '/sun.png'} alt="There is a" style={{height:20, width:20,marginLeft:"2px"}} onClick={change}/>}
          </IconButton>
        </AppBar>
      </Box>

      <Grid id="conti" sx={{ width: "200px" }}>
        <Grid className="grid">
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            required
            className="first"
            value={props.formData.firstData}
            onChange={(e) =>
              props.setFormData((prev) => {
                return { ...prev, firstData: e.target.value };
              })
            }
          />
        </Grid>
        <Grid className="grid">
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            required
            className="second"
            value={props.formData.lastData}
            onChange={(e) =>
              props.setFormData((prev) => {
                return { ...prev, lastData: e.target.value };
              })
            }
          />
        </Grid>
        <Grid className="grid">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            required
            className="email"
            value={props.formData.emailData}
            onChange={(e) =>
              props.setFormData((prev) => {
                return { ...prev, emailData: e.target.value };
              })
            }
          />
        </Grid>
        <Grid className="grid">
          <Button
            variant="contained"
            onClick={routeChange}
            style={{ marginLeft: "40px" }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserForm;
