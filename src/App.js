import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.component";
import Services from "./components/pages/Services.component"
import SignUp from "./components/pages/SignUp.component"
import Products from "./components/pages/Product.component"

function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
    </Router>
  );
}

export default App;
