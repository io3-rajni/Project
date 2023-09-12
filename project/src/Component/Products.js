import React, { useEffect, useState } from "react";
import ProductsDialog from "./ProductsDialog";
import axios from "axios";
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
    </>
  );
};

export default Products;
