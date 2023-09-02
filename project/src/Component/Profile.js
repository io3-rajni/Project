import React from "react";
import ProfileDialog from "./ProfileDialog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
const Profile = (props) => {
  const { openProfileDialog, setOpenProfileDialog } = props;
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card sx={{ maxWidth: 400, margin: "auto", marginTop: "10%" }}>
          <CardActionArea>
            {/* <CardMedia component="img" height="140" /> */}
            <img
              src="https://www.askideas.com/media/13/Welcome-Picture.jpg"
              alt="link"
              style={{ height: "17rem" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
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
