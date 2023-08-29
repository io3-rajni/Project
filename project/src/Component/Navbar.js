import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = (props) => {
  const { setOpenLoginDialog } = props;
  const[]
  const navigate = useNavigate();

  const handleLogin = () => {
    setOpenLoginDialog(true);
    // navigate("/Login");
  };
  const handleProfile = () => {
    console.log("Profile");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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
                width: "40%",
                justifyContent: "space-evenly",
              }}
            >
              <li onClick={() => navigate("/Home")}>Home</li>
              <li onClick={handleLogin}>Login</li>
              <li onClick={handleProfile}>Profile</li>
              <li onClick={() => navigate("/Products")}>Products</li>
              <li onClick={() => navigate("/Contact")}>Contact</li>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
