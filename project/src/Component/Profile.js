import React from "react";
import ProfileDialog from "./ProfileDialog";

const Profile = (props) => {
  const { openProfileDialog, setOpenProfileDialog } = props;
  return (
    <>
      <ProfileDialog
        openProfileDialog={openProfileDialog}
        setOpenProfileDialog={setOpenProfileDialog}
      />
    </>
  );
};

export default Profile;
