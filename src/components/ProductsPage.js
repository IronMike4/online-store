import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductsPage.css";

// List of products with details
const products = [
  {
    id: 1,
    title: "Yeezy cargo pants",
    description: "Thick cotton cargo pants with cargo pockets",
    price: 19.99,
    imageUrl: "/images/product1.avif",
    colors: ["Red", "Green", "Blue"],
  },
  {
    id: 2,
    title: "PSD jacket",
    description: "PSD jacket sleeveless jacket",
    price: 15.99,
    imageUrl: "/images/product12.jpg",
    colors: ["Red", "Green", "Blue"],
  },
  {
    id: 3,
    title: "Woolworths ladies coat",
    description: "Thick woolen coat with waist belt",
    price: 21.99,
    imageUrl: "/images/product3.avif",
    colors: ["Red", "Green", "Blue"],
  },
  {
    id: 4,
    title: "Edgars ladies coat",
    description: "Thick woolen coat with waist bel",
    price: 25.99,
    imageUrl: "/images/product4.jpg",
    colors: ["Red", "Green", "Blue"],
  },
  {
    id: 5,
    title: "Addidas tshirt",
    description: "Tight fitting open tshirt with round neck",
    price: 29.99,
    imageUrl: "/images/product5.avif",
    colors: ["Red", "Green", "Blue"],
  },
  {
    id: 6,
    title: "Denim jacket",
    description: "Tight-fitting denim jacket with side pockets.",
    price: 33.99,
    imageUrl: "/images/product6.avif",
    colors: ["Red", "Green", "Blue"],
  },
  {
    id: 7,
    title: "Puma sports sweatpants",
    description: "Comfortable sports sweatpants with side pockets.",
    price: 35.99,
    imageUrl: "/images/product7.avif",
    colors: ["Red", "Green", "Blue"],
  },
  {
    id: 8,
    title: "Mike hoody",
    description: "Mike winter hoody sweatshirt with front pocket.",
    price: 38.99,
    imageUrl: "/images/product8.avif",
    colors: ["Red", "Green", "Blue"],
  },
  {
    id: 9,
    title: "Ross ladies sweater",
    description: "Thin cotton sweater with round neck.",
    price: 40.99,
    imageUrl: "/images/product9.avif",
    colors: ["Red", "Green", "Blue"],
  },
  {
    id: 10,
    title: "Nike hoody",
    description: "Nike winter hoody sweatshirt with front pocket.",
    price: 41.99,
    imageUrl: "/images/product10.avif",
    colors: ["Red", "Green", "Blue"],
  },
];

const ProductsPage = ({ updateTotalPrice, showPrice = true }) => {
  const [selectedColors, setSelectedColors] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  // Handle color selection for a product
  const handleColorSelect = (productId, color) => {
    setSelectedColors({
      ...selectedColors,
      [productId]: color,
    });
    // Clear error message when a color is selected
    setErrorMessages({
      ...errorMessages,
      [productId]: "",
    });
  };

  // Handle product purchase and update total price
  const handleBuy = (productId, price) => {
    // Check if a color has been selected for the product
    if (!selectedColors[productId]) {
      setErrorMessages({
        ...errorMessages,
        [productId]: "Please select a color before buying!", // Set error message
      });
      return;
    }
    updateTotalPrice(price); // Update total price if color is selected
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
            {/* Product card */}
            <Card className="product-card shadow-sm border-light">
              {/* Product image */}
              <Card.Img
                variant="top"
                src={product.imageUrl}
                className="img-fluid product-img"
              />
              <Card.Body>
                {/* Product title */}
                <Card.Title className="text-primary">
                  <strong>{product.title}</strong>
                </Card.Title>
                {/* Product description */}
                <Card.Text className="text-muted">
                  {product.description}
                </Card.Text>
                {/* Display price if showPrice is true */}
                {showPrice && (
                  <Card.Text className="text-success">
                    <strong>Price: R{product.price.toFixed(2)}</strong>
                  </Card.Text>
                )}
                {/* Dropdown for color selection */}
                <DropdownButton
                  id={`dropdown-${product.id}`}
                  title={selectedColors[product.id] || "Select Color"}
                  className="mb-3"
                  onSelect={(color) => handleColorSelect(product.id, color)}
                >
                  {product.colors.map((color) => (
                    <Dropdown.Item key={color} eventKey={color}>
                      {color}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                {/* Display error message if there's an error */}
                {errorMessages[product.id] && (
                  <div className="text-danger mb-2">
                    {errorMessages[product.id]}
                  </div>
                )}
                {/* Buy Now button */}
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => handleBuy(product.id, product.price)}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
