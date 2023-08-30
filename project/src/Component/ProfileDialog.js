import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ProfileDialog = (props) => {
  const { openProfileDialog, setOpenProfileDialog } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // const handleClickOpen = () => {
  //   setOpenProfileDialog(true);
  // };

  const handleClose = () => {
    setOpenProfileDialog(false);
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        fullScreen={fullScreen}
        open={openProfileDialog}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Create your Profile"}
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-firstName-input"
              label="First Name"
              type="text"
              variant="standard"
            />
            <TextField
              id="standard-lastName-input"
              label="Last Name"
              type="text"
              variant="standard"
            />
            <TextField
              id="standard-email-input"
              label="Email"
              type="text"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              variant="standard"
            />
            <TextField
              id="standard-Number-input"
              label="Phone Number"
              type="number"
              variant="standard"
            />
            <TextField
              id="standard-Address-input"
              label="Address"
              type="text"
              variant="standard"
            />
            <TextField
              id="standard-State-input"
              label="State"
              type="text"
              variant="standard"
            />
            <TextField
              id="standard-district-input"
              label="District"
              type="text"
              variant="standard"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfileDialog;
