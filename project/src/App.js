import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import Login from "./Component/Login";
import Contact from "./Component/Contact";
import Products from "./Component/Products";
import Navbar from "./Component/Navbar";
function App() {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openProfileDialog, setOpenProfileDialog] = useState(false);
  return (
    <>
      <Navbar
        setOpenLoginDialog={setOpenLoginDialog}
        setOpenProfileDialog={setOpenProfileDialog}
      />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route
          path="/Profile"
          element={
            <Profile
              openProfileDialog={openProfileDialog}
              setOpenProfileDialog={setOpenProfileDialog}
            />
          }
        ></Route>
        <Route
          path="/Login"
          element={
            <Login
              openLoginDialog={openLoginDialog}
              setOpenLoginDialog={setOpenLoginDialog}
            />
          }
        ></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
