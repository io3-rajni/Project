import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const Home = () => {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Login");
  };
  return (
    <>
      <Navbar />
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
            />
            <TextField
              id="outlined-textarea"
              label="Last Name"
              placeholder="Your Last Name"
              multiline
            />
          </Box>
          <Grid item xs={12} sm container>
            <Typography sx={{ cursor: "pointer" }} variant="body2">
              <Stack spacing={2} direction="row" sx={{ flexGrow: 1 }}>
                <Button variant="contained" onClick={handleLogin}>
                  Login
                </Button>
              </Stack>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Home;
