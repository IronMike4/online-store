import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // Handle login action
  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Please enter your name.");
    }
  };

  // Handle logout action
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  // Handle Enter key press for login/logout
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      isLoggedIn ? handleLogout() : handleLogin();
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center flex-column">
      {!isLoggedIn ? ( // Display login form if not logged in
        <div className="text-center">
          <h1 className="mb-4">Please Log In</h1>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              style={{ maxWidth: "400px" }}
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}{" "}
          {/* Display error message if any */}
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        // Display welcome message if logged in
        <div className="text-center">
          <h1 className="mb-4">Welcome, {username}!</h1>
          <button className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
