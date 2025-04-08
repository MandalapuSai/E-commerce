import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckoutProcess.css";
import PaymentGate from "../../assets/pay_1.webp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutProcess = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!/^[0-9]{6}$/.test(formData.pinCode))
      newErrors.pinCode = "PIN Code must be 6 digits";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Payment Processing...", { position: "top-right" });
    } else {
      toast.error("Please fix the errors in the form", {
        position: "top-right",
      });
    }
  };

  return (
    <Container fluid className="payment-gateway-container">
      <Row>
        <Col md={8} className="mb-4 paymentgateway-inputcode">
          <Card className="p-4 paymentgateway-cards">
            <h4 className="mb-3">Delivery Information</h4>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <span className="text-danger">{errors.firstName}</span>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <span className="text-danger">{errors.lastName}</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Street address"
                  onChange={handleChange}
                />
                {errors.address && (
                  <span className="text-danger">{errors.address}</span>
                )}
              </Form.Group>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      placeholder="City"
                      onChange={handleChange}
                    />
                    {errors.city && (
                      <span className="text-danger">{errors.city}</span>
                    )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      placeholder="State"
                      onChange={handleChange}
                    />
                    {errors.state && (
                      <span className="text-danger">{errors.state}</span>
                    )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>PIN Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="pinCode"
                      placeholder="PIN Code"
                      onChange={handleChange}
                    />
                    {errors.pinCode && (
                      <span className="text-danger">{errors.pinCode}</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
                {errors.phone && (
                  <span className="text-danger">{errors.phone}</span>
                )}
              </Form.Group>

              <h4 className="mt-4">Payment Method</h4>
              <Form.Group className="mb-3">
                <Form.Label>
                  All transactions are secure and encrypted.
                </Form.Label>
                <img
                  src={PaymentGate}
                  alt="UPI Payment"
                  className="img-fluid mt-2 payment_gateway-ImgUPI"
                />
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                className="w-100 mt-3 payment_gateway-btn"
              >
                Pay Now
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={4} className="paymentgateway-leftside">
          <Card className="p-4 paymentgateway-box">
            <h4 className="mb-3">Order Summary</h4>
            <div className="d-flex justify-content-between">
              <p>Natural Turmeric - 1kg</p>
              <p>₹950.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Delivery Charges :</p>
              <p>₹50.00</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <p>Total</p>
              <p>₹1,000.00</p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutProcess;
