import React from "react";

export const CartItem = ({ product }) => {
  return (
    <>
      <div>
        <span>{product.productname}</span>
        {product.quantity > 1 && <span>&nbsp;&nbsp;x{product.quantity}</span>}
      </div>
    </>
  );
};
