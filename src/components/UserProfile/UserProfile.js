import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Nav } from "react-bootstrap";

import "./UserProfile.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import ProfilePicture from "../../assets/user-profile-icon.png";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("userinfo");
  const [user] = useState({
    firstName: "Sitharam",
    lastName: "Devarapalli",
    email: "devarapallisitharam@gmail.com",
    phone: "8309684071",
    profileImage: ProfilePicture,
  });



  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <div className="userprofile-container">
      {/* Banner */}
      <div className="userprofile-banner"></div>

      <Container fluid className="px-5 py-3">
        <Card className="userprofile-card">
          <div className="text-center d-flex align-items-center justify-content-start gap-3">
            <img
              src={user.profileImage}
              alt="Profile"
              className="userprofile-avatar"
            />
            <div className="text-start">
              <h4 className="userprofile-name mb-1">
                {user.firstName} {user.lastName}
              </h4>
              <p className="mb-0">{user.email}</p>
            </div>
          </div>

          {/* Tabs */}
          <Nav variant="tabs" className="user-profil-top">
            <Nav.Item>
              <Nav.Link
                eventKey="userinfo"
                className="user-profil-top-1"
                active={activeTab === "userinfo"}
                onClick={() => setActiveTab("userinfo")}
              >
                User Info
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="changepassword"
                className="user-profil-top-1"
                active={activeTab === "changepassword"}
                onClick={() => setActiveTab("changepassword")}
              >
                Change Password
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Tab Content */}
          <Card.Body>
            {activeTab === "userinfo" ? (
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3 userprofile-small-title">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" value={user.firstName} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3 userprofile-small-title">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" value={user.lastName} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3 userprofile-small-title">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" value={user.email} readOnly />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3 userprofile-small-title">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" value={user.phone} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3 userprofile-small-title">
                      <Form.Label>House No / Street</Form.Label>
                      <Form.Control type="text" value={user.house} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3 userprofile-small-title">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" value={user.city} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3 userprofile-small-title">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" value={user.state} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3 userprofile-small-title">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control type="text" value={user.pincode} />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="userprofile-buttons">
                  <Button variant="success" className="me-2 btn-save">
                    Save
                  </Button>
                  <Button variant="danger" className="btn-cancel">
                    Cancel
                  </Button>
                </div>
              </Form>
            ) : (
              <Form>
                <Form.Group className="mb-3 userprofile-small-title">
                  <Form.Label>Current Password</Form.Label>
                  <div className="password-wrapper">
                    <Form.Control
                      type={showCurrentPassword  ? "text" : "password"}
                      className="user-profile-inputbar"
                    />
                    <span
                      className="eye-icon"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </Form.Group>
                {/* New Password Field */}
                <Form.Group className="mb-3 userprofile-small-title">
                  <Form.Label>New Password</Form.Label>
                  <div className="password-wrapper">
                    <Form.Control
                      type={showNewPassword  ? "text" : "password"}
                      className="user-profile-inputbar"
                    />
                    <span
                      className="eye-icon"
                      onClick={() => setShowNewPassword (!showNewPassword)}
                    >
                      {showNewPassword  ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </Form.Group>

                {/* Confirm Password Field */}
                <Form.Group className="mb-3 userprofile-small-title">
                  <Form.Label>Confirm Password</Form.Label>
                  <div className="password-wrapper">
                    <Form.Control
                      type={showConfirmPassword  ? "text" : "password"}
                      className="user-profile-inputbar"
                    />
                    <span
                      className="eye-icon"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword  ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </Form.Group>

                <Button className="update-bnt">Update Password</Button>
              </Form>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default UserProfile;
