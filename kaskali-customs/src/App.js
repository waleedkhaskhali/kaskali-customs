import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./Cart/Cart";
import Home from "./Home/Home";
import { Navbar } from "./Home/Navbar";
import { Login } from "./Login/Login";
import { Product } from "./product/Product";
import Custom from "./Custom/Custom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/loginpage" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
