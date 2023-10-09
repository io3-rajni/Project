import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { LocalParking } from "@mui/icons-material";
const ContactDailog = (props) => {
  const { setContactOpen, openContact } = props;
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submit, setSubmit] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstName = (e) => {
    setFirstName(e?.target?.value);
    console.log("first name", firstName);
  };
  const handleLastName = (e) => {
    setLastName(e?.target?.value);
    console.log("last name", lastName);
  };
  const handleEmail = (e) => {
    setEmail(e?.target?.value);
    console.log("email".email);
  };
  const handleClose = () => {
    setSubmit({ firstName: "", lastName: "", email: "" });
    setContactOpen(false);
  };
  console.log("Clear", submit);

  const handleSubmit = () => {
    sessionStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    setSubmit({ firstName: firstName, lastName: lastName, email: email });
    console.log(LocalParking);
  };
  console.log("submit", submit);
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={openContact}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          required
          autoFocus
          placeholder="First Name"
          type="text"
          onChange={handleFirstName}
          value={firstName}
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          required
          autoFocus
          placeholder="Last Name"
          type="text"
          onChange={handleLastName}
          value={lastName}
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          required
          autoFocus
          placeholder="Email"
          type="email"
          onChange={handleEmail}
          value={email}
        />
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            clear
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactDailog;
