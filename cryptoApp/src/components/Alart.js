// Snack Component - https://material-ui.com/components/snackbars/
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@mui/material/Alert';
import { Cryptostate } from "../CryptoContext";

const Alart = () => {
  const { Alert, setAlert } = Cryptostate();

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar
      open={Alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <MuiAlert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={Alert.type}
      >
        {Alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alart;