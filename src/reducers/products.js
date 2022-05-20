import { createSlice } from "@reduxjs/toolkit";

const productData = [
  {
    id: "a",
    productname: "Best oranges ever",
    description:
      "This is a really great thing, so useable for everything. Juice, fruitsalad or just to eat it.",
    productinfo: {
      size: "10kg",
      material: "fruity material",
      color: "orange color",
    },
    price: 399,
    newprice: 249,
  },
  {
    id: "b",
    productname: "Nice sunglasses",
    description:
      "Very usable for sunny summerdays or very, very bright lights.",
    productinfo: {
      size: "mediumsized",
      material: "plastic",
      color: "black",
    },
    price: 1599,
    newprice: 750,
  },
  {
    id: "c",
    productname: "Bottle of glass",
    description: "Bottle made of glass with screw cap. ",
    productinfo: {
      size: "20cm",
      material: "glass",
      color: "transparent",
    },
    price: 299,
    newprice: 150,
  },
  {
    id: "d",
    productname: "Superstraws",
    description: "Straws made of re-used paper. Made in Sweden.",
    productinfo: {
      size: "25cm",
      material: "re-used paper",
      color: "yellow",
    },
    price: 99,
    newprice: null,
  },
  {
    id: "e",
    productname: "Orangejuice",
    description:
      "Freshly squeezed orangejuice! Oranges from eco-garden in sunny Stockholm.",
    productinfo: {
      size: "1 litre",
      material: "oranges",
      color: "yellow",
    },
    price: 99,
    newprice: null,
  },
  {
    id: "f",
    productname: "All of it",
    description: "Yes, you can have it all. Everything of the picture.",
    productinfo: {
      size: "mixed",
      material: "mixed",
      color: "mixed",
    },
    price: 899,
    newprice: null,
  },
];

export const products = createSlice({
  name: "products",
  initialState: productData,
});
