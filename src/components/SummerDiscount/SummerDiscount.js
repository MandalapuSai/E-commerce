import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./SummerDiscount.css";
import leftImage from "../../assets/SummerDiscount-1.png";
import rightImage from "../../assets/SummerDiscount-2.png";

// Set a fixed countdown date (e.g., 6 days from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 6);
targetDate.setHours(0, 0, 0, 0); // Reset to midnight

const SummerDiscount = () => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container fluid className="SummerDiscount-main px-5">
      <Row className="align-items-center SummerDiscount-row1 mx-0">
        <Col md={3} className="text-center p-0">
          <div className="SummerDiscount-image-frame">
            <img
              src={leftImage}
              alt="Fresh Fruits"
              className="SummerDiscount-image"
            />
          </div>
        </Col>

        <Col md={6} className="text-center SummerDiscount-content p-0">
          <h2 className="SummerDiscount-title">
            Summer <span>Discount</span>
          </h2>
          <p className="SummerDiscount-subtitle">
            Get Rs. 300 off - Limited Time Offer
          </p>
          <div className="SummerDiscount-timer">
            <span>{String(timeLeft.days).padStart(2, "0")}</span> <span>:</span>
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>{" "}
            <span>:</span>
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>{" "}
            <span>:</span>
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>
          <div className="SummerDiscount-timer-labels">
            <span>Days</span> <span>Hours</span> <span>Minutes</span>{" "}
            <span>Seconds</span>
          </div>
          <Button className="SummerDiscount-button">Shop Now</Button>
        </Col>

        <Col md={3} className="text-center p-0">
          <div className="SummerDiscount-image-frame">
            <img
              src={rightImage}
              alt="Pickle Making"
              className="SummerDiscount-image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SummerDiscount;
