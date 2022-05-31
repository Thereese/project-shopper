import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

//use useSelector to fetch items from the cart-store
export const Cart = () => {
  const products = useSelector((store) => store.cart.items);

  //decides which price that should be used in the totalPrice-calculation
  const rightPrice = (item) => {
    if (item.newprice) {
      return item.newprice;
    } else {
      return item.price;
    }
  };

  //calculates the total price of all the items in the cart
  const totalPrice = useSelector((store) =>
    store.cart.items.reduce(
      (total, item) => total + rightPrice(item) * item.quantity,
      0
    )
  );

  //map over products in the cart and render items productname and quantity with CartItem-component
  //show total price of items in cart
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
