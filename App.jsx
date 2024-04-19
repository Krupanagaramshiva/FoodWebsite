import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AminCrud from "./AminCrud";
import NotFound from "./assets/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewDetails from "./ViewDetails";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import OrderConfirmation from "./OrderConfirmation";
import ProductsByCategory from "./ProductsByCategory";
import Footer from "./Footer";
import Toplistveg from "./Toplistveg";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminCurd" element={<AminCrud />} />
        <Route path="/view/:id" element={<ViewDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/ProductByCategory/:id" element={<ProductsByCategory/>} />       
        <Route path="/order" element={<OrderConfirmation/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/toplist" element={<Toplistveg/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
