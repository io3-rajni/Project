import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import Login from "./Component/Login";
import Contact from "./Component/Contact";
import Products from "./Component/Products";
import Navbar from "./Component/Navbar";
import { useNavigate } from "react-router-dom";

function App() {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openProfileDialog, setOpenProfileDialog] = useState(false);
  const [ProductsDialogOpen, setProductDialogOpen] = useState(false);
  const [openContact, setContactOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        openLoginDialog={openLoginDialog}
        setOpenLoginDialog={setOpenLoginDialog}
        setOpenProfileDialog={setOpenProfileDialog}
        setProductDialogOpen={setProductDialogOpen}
        setContactOpen={setContactOpen}
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
          path="/Products"
          element={
            <Products
              ProductsDialogOpen={ProductsDialogOpen}
              setProductDialogOpen={setProductDialogOpen}
            />
          }
        ></Route>
        <Route
          path="/Contact"
          element={
            <Contact
              openContact={openContact}
              setContactOpen={setContactOpen}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
