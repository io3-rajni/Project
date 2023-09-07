import * as React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginDialog from "./LoginDialog";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const navigate = useNavigate();
  const { openLoginDialog, setOpenLoginDialog } = props;
  const [loginData, setLoginData] = useState({});
  // const [apiData, setApiData] = useState([]);
  // console.log("dhf sdyfg", apiData);
  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products")
  //     .then((response) => {
  //       setApiData(response);
  //       console.log("response", response);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // }, []);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const handleLoginDialog = (data) => {
    setLoginData(data);
    console.log("Login Data", data);
  };
  const handleNext = () => {
    navigate("/Profile");
  };
  return (
    <>
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

          <Typography variant="h6" component="div">
            FIRST NAME :{loginData?.firstName}
          </Typography>
          <Typography variant="h6" component="div">
            LAST NAME :{loginData?.lastName}
          </Typography>
          <Typography variant="h6" component="div">
            EMAIL :{loginData?.email}
          </Typography>

          <br />
          <Typography variant="body2">
            Please Check Your Detail Carefully
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            href="#contained-buttons"
            onClick={handleNext}
          >
            Next
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Login;
