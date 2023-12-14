import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Tabs } from '@mui/material';
import { AppBar } from '@mui/material';
import { Tab } from '@mui/material';
import Login from './Login';
import Signup from './Signup';
import { Cryptostate } from '../../CryptoContext';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    width:400,
    backgroundColor: theme.palette.background.paper,
    color: "white",
    borderRadius:10,
  },
}));

export default function AuthModal({setAlert}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
     <button variant="contained" style={{
        width:80,
        height:40,
        marginLeft:15,
        backgroundColor: "#EEBC1D",
     }}onclick={handleOpen}>Login
     </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
           <AppBar position='static' style={{backgroundColor:"transparent",color:"white"}}>
           <Tabs value={value} onChange={handleChange} variant="fullWidth" style={{borderRadius:10}}>
                <Tab label="Login"/>
                <Tab label="sign Up"/>

           </Tabs>

           </AppBar>
           {value===0&&<Login handleClose={handleClose}/>}
           {value===1&&<Signup handleClose={handleClose}/>}
          </div>
        </Fade>
      </Modal>
    </div>
  );
    }