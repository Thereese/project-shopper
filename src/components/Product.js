import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { cart } from "reducers/cart";
import orangeimg from "../orangeimg.jpeg";

//lists all data rendered in the "product-box"
export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  return (
    <article className="product-box">
      <div className="img">
        <img src={orangeimg} alt="productimage of bottle" />
      </div>
      <div className="productinfo-box">
        <h2>{product.productname}</h2>
        <p>{product.description}</p>
        <div className="productdetails">
          <div className="toggleinfo-box">
            <button
              className="toggle-btn"
              style={{ marginBottom: visible ? 0 : 86 }}
              onClick={() => setVisible((prev) => !prev)}
            >
              {visible && <IoIosArrowUp />}
              {!visible && <IoIosArrowDown />}
              See information
            </button>
            {visible && (
              <ul>
                <li>Size:&nbsp;{product.productinfo.size}</li>
                <li>Material:&nbsp;{product.productinfo.material}</li>
                <li>Color:&nbsp;{product.productinfo.color}</li>
              </ul>
            )}
          </div>
          <div className="price-box">
            <h3 style={{ color: product.newprice ? "red" : "black" }}>
              {product.newprice ? product.newprice : product.price}:-
            </h3>
            {product.newprice && <h4>{product.price}</h4>}
          </div>
          <div className="addbtn-box">
            <button
              className="addbtn"
              type="button"
              onClick={() => dispatch(cart.actions.addItem(product))}
            >
              Add to list
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
