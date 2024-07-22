import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TotalPrice = ({ total }) => {
  // Get the current location (URL path)
  const location = useLocation();

  // Check if the current page is either the products or about page
  const showTotalPrice =
    location.pathname === "/products" || location.pathname === "/about";

  return (
    // Conditionally render the total price if on the products or about page
    showTotalPrice && (
      <div className="container mt-5">
        <div className="row justify-content-end">
          <div className="col-auto">
            {/* Display the total price formatted to two decimal places */}
            <h2>Total Price: ${total.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    )
  );
};

export default TotalPrice;
