import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navigation = () => {
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

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Online Store
        </Link>{" "}
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
                  className="nav-link text-light"
                  to="/"
                  onClick={closeOffcanvas}
                >
                  Home
                </Link>{" "}
                {/* Home link */}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/products"
                  onClick={closeOffcanvas}
                >
                  Products
                </Link>{" "}
                {/* Products link */}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/about"
                  onClick={closeOffcanvas}
                >
                  About
                </Link>{" "}
                {/* About link */}
              </li>
            </ul>
          </div>
        </div>
        {/* Desktop menu */}
        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>{" "}
              {/* Home link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/products">
                Products
              </Link>{" "}
              {/* Products link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>{" "}
              {/* About link */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
