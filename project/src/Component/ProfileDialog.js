import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const ProfileDialog = (props) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [state, setState] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [district, setDistrict] = React.useState("");
  // const [submit, setSubmit] = React.useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   number: "",
  //   address: "",
  //   state: "",
  //   district: "",
  // });
  const { openProfileDialog, setOpenProfileDialog } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    setOpenProfileDialog(false);
  };
  const handleFirstName = (e) => {
    setFirstName(e?.target?.value);
    console.log("first name", firstName);
  };
  const handleLastName = (e) => {
    setLastName(e?.target?.value);
    console.log("Last Name", lastName);
  };
  const handleAddress = (e) => {
    setAddress(e?.target?.value);
    console.log("Address", address);
  };
  const handleEmail = (e) => {
    setEmail(e?.target?.value);
    console.log("Email", email);
  };
  const handlePassword = (e) => {
    setPassword(e?.target?.value);
    console.log("Password", password);
  };
  const handleState = (e) => {
    setState(e?.target?.value);
    console.log("State", state);
  };
  const handleDistrict = (e) => {
    setDistrict(e?.target?.value);
    console.log("District", district);
  };
  const handleNumber = (e) => {
    setNumber(e?.target?.value);
    console.log("Number", number);
  };

  const handleSubmit = () => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("number", number);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("address", address);
    localStorage.setItem("state", state);
    localStorage.setItem("district", district);

    setOpenProfileDialog(false);
    // navigate("/Profile");
    // console.log("Submit", submit);
    console.log(
      firstName,
      lastName,
      number,
      email,
      password,
      address,
      state,
      district
    );
  };
  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setNumber("");
    setPassword("");
    setAddress("");
    setDistrict("");
    setState("");

    setOpenProfileDialog(false);
  };
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={openProfileDialog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Create your Profile"}
        </DialogTitle>
        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar src="/broken-image.jpg" />
        </Stack>
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
              onChange={handleFirstName}
              value={firstName}
            />
            <TextField
              id="standard-lastName-input"
              label="Last Name"
              type="text"
              variant="standard"
              onChange={handleLastName}
              value={lastName}
            />
            <TextField
              id="standard-email-input"
              label="Email"
              type="text"
              variant="standard"
              onChange={handleEmail}
              value={email}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              variant="standard"
              onChange={handlePassword}
              value={password}
            />
            <TextField
              id="standard-Number-input"
              label="Phone Number"
              type="number"
              variant="standard"
              onChange={handleNumber}
              value={number}
            />
            <TextField
              id="standard-Address-input"
              label="Address"
              type="text"
              variant="standard"
              onChange={handleAddress}
              value={address}
            />
            <TextField
              id="standard-State-input"
              label="State"
              type="text"
              variant="standard"
              onc
              onChange={handleState}
              value={state}
            />
            <TextField
              id="standard-district-input"
              label="District"
              type="text"
              variant="standard"
              onChange={handleDistrict}
              value={district}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClear}>
            clear
          </Button>
          <Button onClick={handleSubmit} autoFocus>
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfileDialog;
