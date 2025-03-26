import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import Logo from "../../assets/Eccomrce_logo_1.png"; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="footer-main bg-success text-white py-4">
      <Container fluid className="px-5">
        <Row>
          {/* Logo Section */}
          <Col md={3} className="footer-logo">
            <img src={Logo} alt="Business Logo" className="img-fluid" />
          </Col>

          {/* Support Section */}
          <Col md={2} className="footer-links">
            <h5>Support</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Our Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>

          {/* Menu Section */}
          <Col md={2} className="footer-links">
            <h5>Menu</h5>
            <ul>
              <li><a href="/">Fruits</a></li>
              <li><a href="/fruits">Dry Fruits</a></li>
              <li><a href="/dry-fruits">Powders</a></li>
              <li><a href="/pickles">Spices</a></li>
            </ul>
          </Col>

          {/* Company Section */}
          <Col md={2} className="footer-links">
            <h5>Company</h5>
            <ul>
              <li><a href="/signin">Login</a></li>
              <li><a href="/signup">Register</a></li>
              <li><a href="/admin-login">Admin Login</a></li>
              <li><a href="/affiliate">Affiliate</a></li>
            </ul>
          </Col>

          {/* Contact Information Section */}
          <Col md={3} className="footer-contact">
            <h5 style={{color:"#f4d000"}}>Contact Information</h5>
            <p><FaMapMarkerAlt /> 123 Street, Vijayawada, AP</p>
            <p><FaPhone /> +91-9999-44-2222</p>
            <p><FaEnvelope /> info@sample.com</p>

            {/* Social Icons */}
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="footer-bottom">
          <Col className="text-center d-flex justify-content-center mt-3">
            <p>Copyright © 2025 Digisphere Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;