import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Avatar, Grid } from "@mui/material";
import LoginDialog from "./LoginDialog";

const Navbar = (props) => {
  const {
    openLoginDialog,
    setOpenLoginDialog,
    setOpenProfileDialog,
    setProductDialogOpen,
    // openContact,
    setContactOpen,
  } = props;

  const [childData, setChildData] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    setOpenLoginDialog(true);
  };
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
  const localStorageData = localStorage?.getItem("isLogin");
  const fName = localStorage.getItem("firstName");

  const findChildData = (data) => {
    console.log("child data", data);
    setChildData(data);
  };
  const handleContact = () => {
    setContactOpen(true);
    console.log("mndnf");
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
                  // justifyContent: "space-evenly",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    // justifyContent: "space-evenly",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      width: "50%",
                    }}
                  >
                    {fName ? (
                      <li>{fName}</li>
                    ) : (
                      <li onClick={() => navigate("/Home")}>Home</li>
                    )}

                    <li onClick={handleProfile}>Profile</li>
                    <li onClick={handleProduct}>Products</li>

                    <li onClick={handleContact}>Contact</li>
                    <li>
                      {childData} {fName}
                    </li>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      width: "50%",
                    }}
                  >
                    {localStorageData ? (
                      <Avatar
                        alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg"
                      />
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
