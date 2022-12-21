import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchproducts();
  }, []);

  const addToCart = (id) => {
    if (cartProducts.find((item) => item._id === id)) {
      updateCartQty(id);
      console.log("item exists here");
    } else {
      postCart(id);
    }
  };

  const postCart = async (id) => {
    await axios.post(`/api/import/cart/${id}`);
  };

  const updateCartQty = async (id) => {
    await axios.put(`/api/import/addqty/${id}`);
  };

  useEffect(() => {
    const fetchcartproducts = async () => {
      const { data } = await axios.get("/api/products/:id");
      setCartProducts(data);
      return data;
    };
    fetchcartproducts();
  }, [addToCart]);

  return (
    <div className="card">
      {products.map((product) => (
        <div className="cardchild">
          <div className="imgcontainer">
            <img className="productimg" src={product.img}></img>
          </div>
          <div className="cardchilds">
            <h2 className="productname">{product.name}</h2>
            <h3 className="price">${product.price}</h3>
            <button onClick={() => addToCart(product._id)} className="cartBtn">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
