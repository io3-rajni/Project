import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { Avatar, Grid } from "@mui/material";
import LoginDialog from "./LoginDialog";
import Dropdown from "./Dropdown";

const Navbar = (props) => {
  const {
    openLoginDialog,
    setOpenLoginDialog,
    setOpenProfileDialog,
    setProductDialogOpen,

    setContactOpen,
  } = props;

  const [childData, setChildData] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    setOpenLoginDialog(true);
  };
  // localStorage.setItem('test', JSON.stringify('test name'))
  const handleProfile = () => {
    navigate("/profile");
    localStorage.getItem("firstName");
    setOpenProfileDialog(true);
    console.log("Profile");
  };
  const handleProduct = () => {
    navigate("./products");
    setProductDialogOpen(true);
    console.log("Products");
  };
  // to get data from local storage
  const isLoginUser = localStorage?.getItem("isLogin");
  // const fName = localStorage.getItem("firstName");
  // const lName = localStorage.getItem("lastName");
  // const email = localStorage.getItem("email");
  // const password = localStorage.getItem("password");

  // console.log("Name", fName, lName, email, password);
  console.log("login", isLoginUser);
  const findChildData = (data) => {
    console.log("child data", data);
    setChildData(data);
  };
  const handleContact = () => {
    navigate("./contact");

    setContactOpen(true);
    console.log("mndnf");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <LoginDialog
        openLoginDialog={openLoginDialog}
        setOpenLoginDialog={setOpenLoginDialog}
        findChildData={findChildData}
      />
      <Grid sx={12} md={6}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  listStyleType: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      width: "50%",
                    }}
                  >
                    {/* {fName ? (
                      <li>{fName}</li>
                    ) : ( */}
                    <li onClick={() => navigate("/Home")}>Home</li>
                    {/* )} */}

                    <li onClick={handleProfile}>Profile</li>
                    <li onClick={handleProduct}>Products</li>

                    <li onClick={handleContact}>Contact</li>
                    {isLoginUser === "true" && <li>Add Cart</li>}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      width: "50%",
                    }}
                  >
                    {isLoginUser === "true" ? (
                      <Box>
                        <Dropdown />
                      </Box>
                    ) : (
                      <li onClick={handleLogin}>Login</li>
                    )}
                  </Box>
                </Box>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
    </>
  );
};
export default Navbar;
