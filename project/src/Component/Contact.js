import React, { useState } from "react";
import ContactDailog from "./ContactDailog";
// import Navbar from "./Navbar";
const Contact = () => {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <ContactDailog
        contactOpen={contactOpen}
        setContactOpen={setContactOpen}
      />
      {/* <Navbar /> */}
      <h1>Contact</h1>
    </>
  );
};

export default Contact;
