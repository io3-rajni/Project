import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const navigate = useNavigate();

  console.log("dhgchfhd", navigate);
  // const handleClick = () => {
  //   navigate("/Profile");
  //   console.log("gbhbgfugktyujmgyu");
  // };
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
              {/* <li onClick={handleClick}>rajni</li> */}
              <li onClick={() => navigate("/Home")}>Home</li>
              <li onClick={() => navigate("/Login")}>Login</li>
              <li onClick={() => navigate("/Profile")}>Profile</li>
              <li onClick={() => navigate("/Products")}>Products</li>
              <li onClick={() => navigate("/Contact")}>Contact</li>
              {/* <li>Home</li> */}
            </Box>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
