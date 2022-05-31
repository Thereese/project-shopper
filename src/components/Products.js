import React from "react";
import { useSelector } from "react-redux";
import { Product } from "./Product";

//using useSelector to fetch all products from the store
export const Products = () => {
  const allProducts = useSelector((store) => store.products);

  //maps over all products and render the Product-component
  return (
    <div className="products list-container">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
