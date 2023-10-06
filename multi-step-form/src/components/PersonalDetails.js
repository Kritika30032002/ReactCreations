import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const PersonalDetails = (props) => {
  const navigate = useNavigate();
  const back = (e) => {
    e.preventDefault();
    let path = "/";
    navigate(path);
  };
  const next = (e) => {
    e.preventDefault();
    if (props.formData.occu === "" || props.formData.city === "" || props.formData.bio === "") {
      alert("Please enter complete details");
    } else {
      let path = "/confirm";
      navigate(path);
    }
    // let path = "/confirm";
    // navigate(path);
  };
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
          <Typography variant="h6">Enter Personal Details</Typography>
        </AppBar>
      </Box>
      <Grid id="contin" sx={{ width: "200px" }}>
        <Grid className="grid">
          <TextField
            id="standard-basic"
            label="Occupation"
            variant="standard"
            value={props.formData.occu}
            onChange={(e) =>
              props.setFormData((prev) => {
                return { ...prev, occu: e.target.value };
              })
            }
            required
          />
        </Grid>
        <Grid className="grid">
          <TextField
            id="standard-basic"
            label="City"
            variant="standard"
            value={props.formData.city}
            onChange={(e) =>
              props.setFormData((prev) => {
                return { ...prev, city: e.target.value };
              })
            }
            required
          />
        </Grid>
        <Grid className="grid">
          <TextField
            id="standard-basic"
            label="Bio"
            variant="standard"
            value={props.formData.bio}
            onChange={(e) =>
              props.setFormData((prev) => {
                return { ...prev, bio: e.target.value };
              })
            }
            required
          />
        </Grid>
        <div className="grid-btn">
          <Grid item className="grid">
            <Button variant="contained" onClick={next}>
              Continue
            </Button>
          </Grid>
          <Grid className="grid btns">
            <Button
              variant="contained"
              style={{ backgroundColor: "white", color: "black" }}
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

export default PersonalDetails;
