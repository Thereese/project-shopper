import React from "react";

export const CartItem = ({ product }) => {
  return (
    <>
      <div className="info">
        <span>{product.productname}</span>
        {product.quantity > 1 && <span>&nbsp;&nbsp;x{product.quantity}</span>}
        {/* <span className="singleitems">{product.productname}</span>
        {product.quantity > 1 && (
          <span className="quantity">x{product.quantity}</span>
        )}
        <span className="sum">{product.price * product.quantity}:-</span> */}
      </div>
    </>
  );
};

{
  /* <span className="singleitems">{product.productname}</span>;
{
  product.quantity > 1 && <span className="quantity">x{product.quantity}</span>;
} */
}
