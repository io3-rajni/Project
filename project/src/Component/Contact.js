import React, { useState } from "react";
import ContactDailog from "./ContactDailog";
// import Navbar from "./Navbar";
const Contact = (props) => {
  const { openContact, setContactOpen } = props;
  return (
    <>
      <ContactDailog
        openContact={openContact}
        setContactOpen={setContactOpen}
      />
      {/* <Navbar /> */}
      <h1>Contact</h1>
    </>
  );
};

export default Contact;
