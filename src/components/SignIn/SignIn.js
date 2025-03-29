import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Image,
  InputGroup,
} from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./SignIn.css";

import Logo from "../../assets/Eccomrce_logo_1.png";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields!");
      return;
    }

    if (
      formData.email === "test@example.com" &&
      formData.password === "password123"
    ) {
      toast.success("Login Successful!");
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <Container fluid className="signin-container">
      <Row className="vh-100">
        {/* Left Side - Full Image (6 Columns) */}
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center signin-image"
        >
          <div className="text-center">
            <h1 className="text-white">Welcome Back!</h1>
            <p className="text-white">
              Join us today and explore new opportunities.
            </p>
            <Link to="/signup" className="btn custom-btn mt-3">
              Create an Account
            </Link>
          </div>
        </Col>

        {/* Right Side - Sign In Form (6 Columns) */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="signin-form">
            {/* Logo on Top */}
            <div className="text-start mb-3">
              <Link to="/">
                <Image src={Logo} alt="Logo" className="signin-logo" />
              </Link>
            </div>

            <h3 className="text-start mb-4 signin-page-title">Sign In</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </Form.Group>

              {/* Password Field with Show/Hide Toggle */}
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                  />
                  <InputGroup.Text
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Forgot Password Link */}
              <div className="d-flex justify-content-between mb-3">
                <Link to="/signup" className="text-muted">
                  Create an account
                </Link>
                <Link to="/forgot-password" className="text-muted">
                  Forgot Password?
                </Link>
              </div>

              <Button
                variant="success"
                type="submit"
                className=" signin-btn"
              >
                Sign In
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
