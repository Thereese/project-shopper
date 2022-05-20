import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Header } from "components/Header";
import { Products } from "components/Products";
import { Cart } from "components/Cart";

import { cart } from "reducers/cart";
import { products } from "reducers/products";

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
});

const store = configureStore({ reducer });

export const App = () => (
  <div className="page-wrapper">
    <Provider store={store}>
      <Header />
      <Products />
      <Cart />
    </Provider>
  </div>
);
