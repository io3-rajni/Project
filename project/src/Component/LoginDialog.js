import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Password } from "@mui/icons-material";

const LoginDialog = (props) => {
  const { openLoginDialog, setOpenLoginDialog, handleLoginDialog } = props;
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const handleClose = () => {
    setOpenLoginDialog(false);
  };
  const handleFirstName = (e) => {
    setFirstName(e?.target?.value);
    console.log("First Name", firstName);
  };
  const handleLastName = (e) => {
    setLastName(e?.target?.value);
    console.log("last Name", lastName);
  };
  const handleEmail = (e) => {
    setEmail(e?.target?.value);
    console.log("email", email);
  };
  const handlePassword = (e) => {
    setPassword(e?.target?.value);
    console.log("Password", password);
  };
  const handleSubmit = () => {
    handleLoginDialog({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    setOpenLoginDialog(false);
  };
  const handleRefresh = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={openLoginDialog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Login Page"}</DialogTitle>
        <DialogContent>
          <Stack
            component="form"
            sx={{
              width: "30ch",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
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
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              required
              autoFocus
              placeholder="Password"
              type="password"
              onChange={handlePassword}
              value={password}
            />
          </Stack>
        </DialogContent>

        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-evenly", mb: "2ch" }}
        >
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={handleRefresh}
          >
            Refresh
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Dialog>
    </>
  );
};

export default LoginDialog;
