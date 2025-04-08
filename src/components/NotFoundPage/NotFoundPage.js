// src/components/404Page.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  // Navigate back to Home
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container fluid className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="not-found-suggestion">
          It might have been removed or the URL may be incorrect.
        </p>
        <Button onClick={handleGoBack} className="go-back-btn mt-3">
          Go Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
