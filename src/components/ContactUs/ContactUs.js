import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactUs.css'; 

// Renaming the image import to avoid naming conflict
import contactImage from "../../assets/contact-img.jpg";

const ContactUs = () => {
  return (
    <Container fluid className="contact-container px-5 py-3">
      <Row className="align-items-center">
        {/* Form Section */}
        <Col md={6} className="contact-form">
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label className="form-label">Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" className="contact-input-field"/>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your Number" className="contact-input-field"/>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" className="contact-input-field"/>
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your message" className="contact-input-field"/>
            </Form.Group>

            <Button variant="primary" type="submit" className='contactus-btn'>
              Submit
            </Button>
          </Form>
        </Col>

        {/* Image Section */}
        <Col md={6} className="contact-image">
          <img
            src={contactImage} // Using the updated variable
            alt="Contact Us"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;