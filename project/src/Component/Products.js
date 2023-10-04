import React, { useEffect, useState } from "react";
import ProductsDialog from "./ProductsDialog";
import axios from "axios";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "2px" }}>
    •
  </Box>
);
const Products = (props) => {
  const { ProductsDialogOpen, setProductDialogOpen } = props;
  const [apiData, setApiData] = useState([]);
  console.log("APi ", apiData);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setApiData(response?.data?.products);
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <>
      <ProductsDialog
        ProductsDialogOpen={ProductsDialogOpen}
        setProductDialogOpen={setProductDialogOpen}
      />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        // sx={{ width: "50%" }}
      >
        {apiData?.map((item, i) => {
          console.log(item);
          return (
            <Grid item xs={12} md={3} sm={6}>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Card
                  sx={{
                    fontSize: 14,
                  }}
                >
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.thumbnail}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item?.brand}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                      {item?.description}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                      <b>Price:</b>
                      {item?.price}
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
