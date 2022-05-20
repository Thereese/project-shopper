import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const products = useSelector((store) => store.cart.items);

  const rightPrice = (item) => {
    if (item.newprice) {
      return item.newprice;
    } else {
      return item.price;
    }
  };

  const totalPrice = useSelector((store) =>
    store.cart.items.reduce(
      (total, item) => total + rightPrice(item) * item.quantity,
      0
    )
  );

  return (
    <div className="cart">
      Wishlist
      <div className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div>Total Price:&nbsp;&nbsp;{totalPrice}:-</div>
    </div>
  );
};
