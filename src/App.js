import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Error from "./Error";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home></Home> }></Route>
    <Route path="/about" element={<About></About> }></Route>
    <Route path="/products" element={<Products></Products>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    <Route path="/singleproduct/:id" element={<SingleProduct></SingleProduct>}></Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>
    <Route path="*" element={<Error></Error>}></Route>
    </Routes>
    </BrowserRouter>

  )
};

export default App;
