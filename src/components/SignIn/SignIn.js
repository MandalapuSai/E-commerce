import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Card, Row, Col, Image, InputGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignIn.css";

import SigninPic from "../../assets/Eccomrce_logo_1.png";

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
      toast.error("Please fill in all fields!", { position: "top-right", autoClose: 3000 });
      return;
    }

    if (formData.email === "sitharam@gmail.com" && formData.password === "Dsr@123") {
      toast.success("Login Successful!", { position: "top-right", autoClose: 3000 });
    } else {
      toast.error("Invalid email or password!", { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <Container fluid className="signin-container">
      <ToastContainer />

      <Row className="vh-100">
        {/* Left Side - Full Image (6 Columns) */}
        <Col md={6} className="d-none d-md-flex align-items-center justify-content-center signin-image">
          <div className="text-center">
            <h1 className="text-white">Welcome Back!</h1>
            <p className="text-white">Join us today and explore new opportunities.</p>
            <Link to="/signup" className="btn btn-outline-light mt-3">
              Create an Account
            </Link>
          </div>
        </Col>

        {/* Right Side - Sign In Form (6 Columns) */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Card className="signin-form">
            {/* Logo on Top */}
            <div className="text-start mb-3">
              <Image src={SigninPic} alt="Logo" className="signin-logo" />
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
                  <InputGroup.Text onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Forgot Password Link */}
              <div className="d-flex justify-content-between mb-3">
                <Link to="/signup" className="text-muted">Create an account</Link>
                <Link to="/forgot" className="text-muted">Forgot Password?</Link>
              </div>

              <Button type="submit" className="w-100 signin-btn">
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
