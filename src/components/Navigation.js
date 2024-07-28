import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navigation = () => {
  const location = useLocation(); // Get the current location to determine the active route

  // Function to close the offcanvas menu
  const closeOffcanvas = () => {
    const offcanvas = document.querySelector(".offcanvas");
    if (offcanvas) {
      // eslint-disable-next-line no-undef
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  // Determine if the current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Online Store
        </Link>
        {/* Brand name */}

        {/* Hamburger button for mobile */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas menu for mobile */}
        <div
          className="offcanvas offcanvas-end d-lg-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-primary"
              id="offcanvasNavbarLabel"
            >
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-primary">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link text-light ${
                    isActive("/") ? "active" : ""
                  }`}
                  to="/"
                  onClick={closeOffcanvas}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-light ${
                    isActive("/products") ? "active" : ""
                  }`}
                  to="/products"
                  onClick={closeOffcanvas}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-light ${
                    isActive("/about") ? "active" : ""
                  }`}
                  to="/about"
                  onClick={closeOffcanvas}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-light ${
                    isActive("/login") ? "active" : ""
                  }`}
                  to="/login"
                  onClick={closeOffcanvas}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-light ${
                    isActive("/register") ? "active" : ""
                  }`}
                  to="/register"
                  onClick={closeOffcanvas}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${
                  isActive("/") ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${
                  isActive("/products") ? "active" : ""
                }`}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${
                  isActive("/about") ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${
                  isActive("/login") ? "active" : ""
                }`}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${
                  isActive("/register") ? "active" : ""
                }`}
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
