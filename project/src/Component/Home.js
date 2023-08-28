import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import Navbar from "./Navbar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const Home = () => {
  const navigate = useNavigate("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [value, setValue] = useState("");
  // const [validName, setValidName] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e?.target?.value);
  };
  console.log("First Name", firstName);
  const handleLastName = (e) => {
    setLastName(e?.target?.value);
  };

  // console.log("Last Name"), lastName;
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  const handleLogin = () => {
    // setOpenLoginDialog(true);
    navigate("/Login");
    console.log("dfgykop");
  };
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (validName) {
  //     setValidName("");
  //     console.log("email1", validName);
  //   } else {
  //   }
  // };
  return (
    <>
      {/* <Navbar /> */}
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 600,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container sx={{ marginTop: "10" }}>
          <Grid item>
            <ButtonBase sx={{ width: 600, height: 300 }}>
              <Typography variant="h3">Will Come To My Home Page</Typography>
            </ButtonBase>
          </Grid>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="First Name"
              placeholder="Your First Name"
              multiline
              maxRows={4}
              value={firstName}
              onChange={handleFirstName}
            />
            {/* <Typography sx={{ color: "red" }}>{validName}</Typography> */}
            <TextField
              id="outlined-textarea"
              label="Last Name"
              placeholder="Your Last Name"
              multiline
              value={lastName}
              onChange={handleLastName}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Typography sx={{ cursor: "pointer" }}>
            <Stack direction="row">
              <Button variant="contained" onClick={handleLogin}>
                Login
              </Button>
            </Stack>
          </Typography>
        </Grid>
      </Paper>
    </>
  );
};

export default Home;
