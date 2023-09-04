import React, { useState } from "react";
import ProductsDialog from "./ProductsDialog";
const Products = (props) => {
  const { ProductsDialogOpen, setProductDialogOpen } = props;
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
