import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="container mt-5">
      {" "}
      {/* Main container with top margin */}
      <h1 className="text-center mb-4">About Us</h1> {/* Page title */}
      <p className="text-center mb-4">
        An online store specializing in high-quality clothing, offering a wide
        range of stylish and fashionable apparel for all occasions.
      </p>{" "}
      {/* Introduction paragraph */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {" "}
        {/* Responsive row with dynamic columns */}
        {/* Store Logo Card */}
        <div className="col">
          <div className="card shadow-sm">
            <img
              src="/images/logo.jpeg"
              className="card-img-top img-fluid about-img"
              alt="Our store logo"
            />{" "}
            {/* Store logo image */}
            <div className="card-body text-center">
              <h5 className="card-title">Our Store Logo</h5>
              <p className="card-text">
                Our store logo embodies our commitment to quality and modern
                elegance.
              </p>
            </div>
          </div>
        </div>
        {/* Store Environment Image 1 */}
        <div className="col">
          <div className="card shadow-sm">
            <img
              src="/images/online-store1.webp"
              className="card-img-top img-fluid about-img"
              alt="Welcoming and stylish store environment"
            />{" "}
            {/* Store environment image 1 */}
            <div className="card-body text-center">
              <h5 className="card-title">Our Store</h5>
              <p className="card-text">
                A glimpse of our store's welcoming and stylish environment.
              </p>
            </div>
          </div>
        </div>
        {/* Store Environment Image 2 */}
        <div className="col">
          <div className="card shadow-sm">
            <img
              src="/images/online-store2.webp"
              className="card-img-top img-fluid about-img"
              alt="Inviting store atmosphere"
            />{" "}
            {/* Store environment image 2 */}
            <div className="card-body text-center">
              <h5 className="card-title">Our Store</h5>
              <p className="card-text">
                A snapshot highlighting the inviting atmosphere of our store.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        {" "}
        {/* Contact section */}
        <h2>Contact Us</h2>
        <p>
          Email: <a href="mailto:contact@store.com">mike@online.com</a>
        </p>
        <p>Phone: +27 712 3456</p>
      </div>
    </div>
  );
};

export default AboutPage;
