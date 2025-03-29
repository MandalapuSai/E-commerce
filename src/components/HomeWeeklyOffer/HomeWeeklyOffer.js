import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HomeWeeklyOffer.css";


import OfferImage from "../../assets/HomeWeeklyOffer-1.png"; // Replace with your image path

const HomeWeeklyOffer = () => {
  return (
    <section className="homeWeeklyOffer-section px-5">
      <Container fluid >
      <Row className="align-items-center homeWeeklyOffer-row">
      {/* Left Side: Content */}
          <Col md={6} className="homeWeeklyOffer-content">
            <p className="homeWeeklyOffer-subtitle">Weekly Offer</p>
            <h2 className="homeWeeklyOffer-title">
              Best Quality, Healthy and <span><br></br>Fresh Fruits</span>
            </h2>
            <p className="homeWeeklyOffer-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
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
  );
};

export default HomeWeeklyOffer;
