import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [cartProducts, setCartProducts] = useState([]);

  let sum = 0;

  for (let index = 0; index < cartProducts.length; index++) {
    sum += cartProducts[index].qty;
  }

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/api/products/:id");
      setCartProducts(data);
    };
    fetchproducts();
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        LOGO
      </Link>
      <ul className="nav-links">
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/products" className="nav-link">
          PRODUCTS
        </Link>
        <Link to="/custom" className="nav-link">
          CUSTOM
        </Link>
        <Link to="/cart" className="nav-link">
          CART
        </Link>
      </ul>
    </nav>
  );
};
