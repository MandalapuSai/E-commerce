import React from "react";
import "./OurProducts.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import Images
import Fruits from "../../assets/ourproduct-1.png";
import DryFruits from "../../assets/ourproduct-2.png";
import Spices from "../../assets/ourproduct-3.png";
import Pickles from "../../assets/ourproduct-4.png";
import Powders from "../../assets/ourproduct-5.png";

const OurProducts = () => {
  const navigate = useNavigate();
  const products = [
    { image: Fruits, name: "Fruits" },
    { image: DryFruits, name: "Dry Fruits" },
    { image: Spices, name: "Spices" },
    { image: Pickles, name: "Pickles" },
    { image: Powders, name: "Powders" },
  ];

  const handleClickCategory = (categoryName) => {
    // Navigate to the category detail page
    navigate(`/category/${categoryName}`);
  };

  return (
    <Container fluid className="ourproducts-section text-center">
      {/* Section Title */}
      <h2 className="ourproducts-title">
        Our <span>Products</span>
      </h2>
      <div className="ourproducts-underline"></div>

      {/* Product Grid */}
      <Row className="justify-content-center">
        {products.map((product, index) => (
          <Col key={index} xs={6} sm={4} md={2} className="ourproducts-item">
            <div className="ourproducts-circle"  onClick={() => handleClickCategory(product.name)}>
              <img src={product.image} alt={product.name} className="img-fluid" />
            </div>
            <p className="ourproducts-name">{product.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurProducts;
