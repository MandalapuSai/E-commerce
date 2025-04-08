import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";


import "./AdminSignIn.css";

import SigninPic from "../../../assets/Eccomrce_logo_1.png";
import { Admin_Login } from "../../Api/Api";

const AdminSignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!formData.email || !formData.password) {
  //     toast.error("Please fill in all fields!");
  //     return;
  //   }

  //   if (
  //     formData.email === "admin@gmail.com" &&
  //     formData.password === "admin@123"
  //   ) {
  //     toast.success("Login Successful!");
  //     setTimeout(() => navigate("/admin-dashboard"), 2000);
  //   } else {
  //     toast.error("Invalid email or password!");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields!");
      return;
    }
    try {
      const response = await fetch(Admin_Login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        console.log(data.admin)
        localStorage.setItem("User", JSON.stringify(data.admin));
        setTimeout(() => navigate("/admin-dashboard"), 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again!");
      console.error("Error:", error);
    }

  }




  return (
    <Container fluid className="admin-signin-container">
      <Row className="vh-100">
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center admin-signin-image"
        >
          <div className="text-center">
            <h1 className="text-white">Welcome Back!</h1>
            <p className="text-white">
              Join us today and explore new opportunities.
            </p>
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="admin-signin-form">
            <div className="text-start mb-3">
              <Link to="/">
                <Image
                  src={SigninPic}
                  alt="Logo"
                  className="admin-signin-logo"
                />
              </Link>
            </div>
            <h3 className="text-start mb-4 admin-signin-page-title">
              Admin Sign In
            </h3>
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
              <Button type="submit" className="w-100 admin-signin-btn">
                Sign In
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminSignIn;
