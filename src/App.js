import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import AboutPage from "./components/AboutPage";
import TotalPrice from "./components/TotalPrice";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  // State to track the total price of items
  const [totalPrice, setTotalPrice] = useState(0);

  // State to determine if the total price should be shown
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  // Function to update the total price and control visibility
  const updateTotalPrice = (price) => {
    setTotalPrice(totalPrice + price); // Add the price to the total
    setShowTotalPrice(true); // Show the total price display
  };

  return (
    <Router>
      {/* Render the navigation bar */}
      <Navigation />
      {/* Conditionally render the TotalPrice component based on showTotalPrice */}
      {showTotalPrice && <TotalPrice total={totalPrice} />}
      {/* Define routes and their corresponding components */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<ProductsPage updateTotalPrice={updateTotalPrice} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
