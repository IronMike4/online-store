import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {/* Welcome message */}
        <div className="col-12 text-center mb-4">
          <h1>Welcome to Our Online Store</h1>
        </div>
        {/* Introductory text */}
        <div className="col-12 text-center mb-4">
          <p>
            Discover a wide range of products including clothing, accessories, and more.
            Sign in or register to start shopping!
          </p>
        </div>
        {/* Image representing the store */}
        <div className="col-12 col-md-8 text-center mb-4">
          <img
            src="/images/online-store.webp"
            alt="Store Front"
            className="img-fluid rounded"
          />
        </div>
        {/* Login and Register buttons */}
        <div className="col-12 text-center">
          <div className="d-flex justify-content-center flex-wrap">
            <Link to="/login" className="btn btn-primary m-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-secondary m-2">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
