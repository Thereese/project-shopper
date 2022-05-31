import React from "react";

//lists what information to be shown in the cart about the product
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
