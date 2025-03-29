import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  InputGroup,
} from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "./ForgotPassword.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "../../assets/Eccomrce_logo_1.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showResetInputs, setShowResetInputs] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isCounting, setIsCounting] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!minLength.test(password))
      return "Password must be at least 8 characters long.";
    if (!hasUpperCase.test(password))
      return "Password must contain at least one uppercase letter.";
    if (!hasLowerCase.test(password))
      return "Password must contain at least one lowercase letter.";
    if (!hasNumber.test(password))
      return "Password must contain at least one number.";
    if (!hasSpecialChar.test(password))
      return "Password must contain at least one special character.";
    return null;
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    toast.success("OTP sent to your email!");
    setShowOtpInput(true);
    setIsCounting(true);
    setTimer(60);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      toast.success("OTP Verified! Please reset your password.");
      setShowResetInputs(true);
    } else {
      toast.error("Invalid OTP! Try again.");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const passwordError = validatePassword(newPassword);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    toast.success("Password successfully reset!");
  };

  useEffect(() => {
    let countdown;
    if (isCounting && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setIsCounting(false);
    }
    return () => clearInterval(countdown);
  }, [isCounting, timer]);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  return (
    <Container fluid className="forget-container">
      <Row className="w-100">
        <Col md={6} className="forget-image">
          <div>
            <h1>Forgot Password?</h1>
            <p>Enter your email to receive an OTP for password reset</p>
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Card className="forget-form">
            <div className="text-start mb-3">
              <Link to="/">
                <img src={Logo} alt="Logo" className="forget-logo" />
              </Link>
            </div>
            <h2 className="text-start mb-4">Reset Password</h2>
            <Form
              onSubmit={
                showOtpInput
                  ? showResetInputs
                    ? handleResetPassword
                    : handleVerifyOtp
                  : handleSendOtp
              }
            >
              {!showOtpInput && (
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    placeholder="Enter your email"
                  />
                </Form.Group>
              )}
              {showOtpInput && !showResetInputs && (
                <Form.Group controlId="formOtp" className="mb-3">
                  <Form.Label>Enter OTP</Form.Label>
                  <Form.Control
                    type="text"
                    value={otp}
                    onChange={handleOtpChange}
                    required
                    placeholder="Enter OTP"
                  />
                  <div className="mt-2 text-danger">
                    {timer > 0
                      ? `OTP expires in ${timer}s`
                      : "OTP expired! Request a new OTP."}
                  </div>
                </Form.Group>
              )}
              {showResetInputs && (
                <>
                  <Form.Group controlId="formNewPassword" className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showNewPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        required
                        placeholder="Enter new password"
                      />
                      <InputGroup.Text
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        style={{ cursor: "pointer" }}
                      >
                        {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group controlId="formConfirmPassword" className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showConfirmNewPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                        placeholder="Confirm new password"
                      />
                      <InputGroup.Text
                        onClick={() =>
                          setShowConfirmNewPassword(!showConfirmNewPassword)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </>
              )}

              <Button
                variant="success"
                type="submit"
                className="forget-btn w-100"
              >
                {!showOtpInput
                  ? "Send OTP"
                  : showResetInputs
                  ? "Reset Password"
                  : "Verify OTP"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
