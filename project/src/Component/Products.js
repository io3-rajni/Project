import React, { useEffect, useState } from "react";
import ProductsDialog from "./ProductsDialog";
import axios from "axios";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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

      <Card sx={{ minWidth: 100 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
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
    </>
  );
};

export default Products;
