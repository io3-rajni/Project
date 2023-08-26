import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Navbar from "./Navbar";
import { useState } from "react";
import LoginDialog from "./LoginDialog";
const Login = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState({});
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const handleLoginDialog = (data) => {
    setOpenLoginDialog(data);
    console.log("Login Data", data);
  };
  return (
    <>
      <Navbar setOpenLoginDialog={setOpenLoginDialog} />
      <LoginDialog
        setOpenLoginDialog={setOpenLoginDialog}
        openLoginDialog={openLoginDialog}
        handleLoginDialog={handleLoginDialog}
      />
      <Card
        sx={{ width: "35%", height: "35ch", marginTop: "8%", margin: "auto" }}
      >
        <CardContent>
          <Typography
            sx={{ color: "#161635", textShadow: "1px 2px 3px #36535a" }}
            color="text.secondary"
            // gutterBottom
            variant="h5"
          >
            DETAILS
          </Typography>
          <ul>
            <Typography variant="h6" component="div">
              <li>FIRST NAME :</li>
            </Typography>
            <Typography variant="h6" component="div">
              <li>LAST NAME :{openLoginDialog?.email}</li>
            </Typography>
            <Typography variant="h6" component="div">
              <li>EMAIL :{openLoginDialog?.email}</li>
            </Typography>
          </ul>
          <br />
          <Typography variant="body2">
            Please Check Your Detail Carefully
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Submit</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Login;
