import React from "react";
import ProfileDialog from "./ProfileDialog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Profile = (props) => {
  const { openProfileDialog, setOpenProfileDialog } = props;
  const localStorageData = JSON.parse(localStorage?.getItem("keys"));
  console.log(localStorageData);

  const navigate = useNavigate();
  // const handleNext = () => {
  //   navigate("/Products");
  // };
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card sx={{ maxWidth: 400, margin: "auto", marginTop: "8%" }}>
          <CardActionArea>
            {/* <CardMedia component="img" height="140" /> */}
            <img
              src="https://www.askideas.com/media/13/Welcome-Picture.jpg"
              alt="link"
              style={{ height: "17rem" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Congratulation
              </Typography>
              <Typography variant="h6" color="text.secondary">
                You have successfully create Profile page ,now you can enter
                Products page ,and now click on next button and go to Product
                page,.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <li>{localStorageData?.firstName}</li>
            <li>{localStorageData?.lastName}</li>
            <li>{localStorageData?.email}</li>

            {/* <Button size="medium" color="primary" onClick={handleNext}>
              Next
            </Button> */}
          </CardActions>
        </Card>
      </Grid>
      <ProfileDialog
        openProfileDialog={openProfileDialog}
        setOpenProfileDialog={setOpenProfileDialog}
      />
    </>
  );
};

export default Profile;
