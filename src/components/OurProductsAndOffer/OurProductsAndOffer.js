import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./OurProductsAndOffer.css";

// Import Images
import Fruits from "../../assets/ourproduct-1.png";
import DryFruits from "../../assets/ourproduct-2.png";
import Spices from "../../assets/ourproduct-3.png";
import Pickles from "../../assets/ourproduct-4.png";
import Powders from "../../assets/ourproduct-5.png";
import OfferImage from "../../assets/HomeWeeklyOffer-1.png"; 

const OurProductsAndOffer = () => {
  const navigate = useNavigate();
  const products = [
    { image: Fruits, name: "Fruits" },
    { image: DryFruits, name: "Dry Fruits" },
    { image: Spices, name: "Spices" },
    { image: Pickles, name: "Veg Pickles" },
    { image: Powders, name: "Powders" },
  ];


  const handleClickCategory = (categoryName) => {
    // Navigate to the category detail page
    navigate(`/category/${categoryName}`);
  };

  return (
    <div>
      {/* Our Products Section */}
      <section className="ourproducts-section text-center">
        <Container fluid>
          {/* Section Title */}
          <h2 className="ourproducts-title">
            Our <span>Products</span>
          </h2>
          <div className="ourproducts-underline"></div>

          {/* Product Grid */}
          <Row className="justify-content-center">
            {products.map((product, index) => (
              <Col
                key={index}
                xs={6}
                sm={4}
                md={2}
                className="ourproducts-item"
              >
                <div className="ourproducts-circle"  onClick={() => handleClickCategory(product.name)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                  />
                </div>
                <p className="ourproducts-name">{product.name}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Weekly Offer Section */}
      <section className="homeWeeklyOffer-section px-5">
        <Container fluid>
          <Row className="align-items-center homeWeeklyOffer-row">
            {/* Left Side: Content */}
            <Col md={6} className="homeWeeklyOffer-content">
              <p className="homeWeeklyOffer-subtitle">Weekly Offer</p>
              <h2 className="homeWeeklyOffer-title">
                Best Quality, Healthy and{" "}
                <span>
                  <br />
                  Fresh Fruits
                </span>
              </h2>
              <p className="homeWeeklyOffer-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <Button className="homeWeeklyOffer-btn">Shop Now</Button>
            </Col>

            {/* Right Side: Image */}
            <Col md={6} className="homeWeeklyOffer-image">
              <img src={OfferImage} alt="Fresh Fruits" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default OurProductsAndOffer;
