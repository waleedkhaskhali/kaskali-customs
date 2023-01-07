import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Cart.css";

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [customProducts, setCustomProducts] = useState([]);

  const deleteItem = async (id) => {
    const productExists = cartProducts.find((item) => item._id === id);
    console.log("infinite");
    if (productExists.qty <= 1) {
      await axios.delete(`/api/import/cart/${id}`);
    } else {
      await axios.put(`/api/import/removeqty/${id}`);
    }
  };

  const deleteCustomItem = async (id) => {
    await axios.delete(`/api/custom/delete/${id}`);
  };

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/api/products/:id");
      setCartProducts(data);
    };
    fetchproducts();
    const fetchcustoms = async () => {
      const { data } = await axios.get("/api/custom");
      setCustomProducts(data);
      console.log(data);
    };
    fetchcustoms();
  }, []);

  return (
    <div className="cartcard">
      <h1>
        <strong>YOUR CART</strong>
      </h1>
      {cartProducts.length === 0 ? (
        <div className="emptycart">Cart is empty</div>
      ) : (
        cartProducts.map((product) => (
          <div>
            <div className="basket-labels">
              <ul>
                <li className="item item-heading">Item</li>
                <li className="price">Price</li>
                <li className="quantity">Quantity</li>
                <li className="subtotal">Subtotal</li>
              </ul>
            </div>
            <div className="basket-product">
              <div className="item">
                <div className="product-image">
                  <img
                    src={product.img}
                    alt="Placholder Image 2"
                    className="product-frame"
                  />
                </div>
                <div className="product-details">
                  <h1>{product.name}</h1>
                  <p>
                    <strong>Navy, Size 18</strong>
                  </p>
                  <p>Product Code - 232321939</p>
                </div>
              </div>
              <div className="price">$ {product.price}</div>
              <div className="quantity">
                <span>{product.qty}</span>
              </div>
              <div className="subtotal">$ {product.price + 20}</div>
              <div className="remove">
                <button
                  className="removeButton"
                  onClick={() => deleteItem(product._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div>
        {cartProducts.length === 0 && customProducts.length === 0 ? (
          <div className="emptycart">Cart is empty</div>
        ) : (
          customProducts.map((product) => (
            <div>
              <div className="basket-labels">
                <ul>
                  <li className="item item-heading">Item</li>
                  <li className="price">Price</li>
                  <li className="quantity">Quantity</li>
                  <li className="subtotal">Subtotal</li>
                </ul>
              </div>
              <div className="basket-product">
                <div className="item">
                  <div className="custom-image">
                    <div className="customparent">
                      <div>
                        <img
                          className="customcard"
                          src={require(`../imgs/grips/grip_riser_${product.gripColor}.png`)}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="customcard"
                          src={require(`../imgs/tires/tires_${product.tireColor}.png`)}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="customcard"
                          src={require(`../imgs/base/components_black_0.png`)}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="customcard"
                          src={require(`../imgs/base/handlebar_riser_silver_0.png`)}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="customcard"
                          src={require(`../imgs/saddle/saddle_no_upgrade.png`)}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="customcard"
                          src={require(`../imgs/chains/chain_${product.chainColor}.png`)}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="customcard"
                          src={require(`../imgs/rims/rim_front_${product.frontRimColor}.png`)}
                        ></img>
                      </div>
                      <div>
                        <img
                          className="customcard"
                          src={require(`../imgs/rims/rim_back_${product.backRimColor}.png`)}
                        ></img>
                      </div>
                    </div>
                    <div>
                      <img
                        className="customcard"
                        src={require(`../imgs/frames/frame_${product.frameColor}_0.png`)}
                      ></img>
                    </div>
                    <div className="product-detail">
                      <h1>{product.frame}</h1>
                      <p>
                        <strong>Navy, Size 18</strong>
                      </p>
                      <p>Product Code - 232321939</p>
                    </div>
                  </div>
                </div>
                <div className="price">$ {product.price}</div>
                <div className="quantity">
                  <span>1</span>
                </div>
                <div className="subtotal"></div>
                <div className="remove">
                  <button
                    className="removeButton"
                    onClick={() => deleteCustomItem(product._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
