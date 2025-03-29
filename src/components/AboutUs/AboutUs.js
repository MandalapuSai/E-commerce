import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

import AboutBanner from "../../assets/About-banner-1.png";
import AboutBanner1 from "../../assets/About-banner-2.png";
import AboutBanner2 from "../../assets/About-banner-3.png";
import AboutBanner3 from "../../assets/About-banner.png";
import AboutUs from "../../assets/aboutus.png";

const About = () => {
    const slides = [
        {
            image: AboutBanner1,
            alt: "About Carousel Image 1",
            title: "Experience the Purity of Nature",
            subtitle: "Fresh Fruits",
            description: "We bring you the freshest, juiciest, and most flavorful organic fruits, packed with natural goodness.",
        },
        {
            image: AboutBanner2,
            alt: "About Carousel Image 2",
            title: "Taste the Goodness of Nature",
            subtitle: "Dry Fruits",
            description: "We bring you the freshest, crunchiest, and most flavorful organic dry fruits, packed with natural goodness.",
        },
        {
            image: AboutBanner3,
            alt: "About Carousel Image 3",
            title: "Up Your Life Naturally",
            subtitle: "Masalas",
            description: "We bring you the freshest, most aromatic, and most flavorful organic masalas, packed with natural goodness.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [clientCount, setClientCount] = useState(0);
    const [awardsCount, setAwardsCount] = useState(0);

    useEffect(() => {
        document.title = "About";
        let clientInterval = setInterval(() => {
            setClientCount((prev) => (prev < 924 ? prev + 1 : 924));
        }, 5);

        let awardsInterval = setInterval(() => {
            setAwardsCount((prev) => (prev < 35 ? prev + 1 : 35));
        }, 100);

        return () => {
            clearInterval(clientInterval);
            clearInterval(awardsInterval);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="about-container">
            {/* Banner Section */}
            <div className="about-banner" style={{ backgroundImage: `url(${AboutBanner})` }}></div>

            <Container fluid>
                {/* Mission Section */}
                <Row className="about-mission align-items-center">
                    <Col md={6}>
                        <img src={AboutUs} alt="About" className="img-fluid about-img" />
                    </Col>
                    <Col md={5}>
                        <span className="about-tag">— Our Mission</span>
                        <h2 className="about-heading">Who We Are?</h2>
                        <p className="about-text">
                            Annapurna Organic, we believe in the power of nature and the purity of organic farming. Our journey
                            began with a simple vision: to provide healthy, fresh, and natural produce while supporting sustainable
                            farming practices.
                        </p>
                    </Col>
                </Row>

                {/* Numbers Section */}
                <Row className="about-numbers d-flex align-items-center px-5">
                    <Col md={5} className="text-start">
                        <span className="about-tag">— Our Mission</span>
                        <h2 className="about-heading">Who We Are?</h2>
                        <p className="about-description">
                            Annapurna Organic, we believe in the power of nature and the purity of organic farming. Our journey
                            began with a simple vision: to provide healthy, fresh, and natural produce while supporting sustainable
                            farming practices.
                        </p>
                    </Col>
                    <Col md={5} className="d-flex justify-content-between stats-numbers">
                        <div>
                            <h2>{clientCount}</h2>
                            <p>Satisfaction Clients</p>
                        </div>
                        <div>
                            <h2>{awardsCount}</h2>
                            <p>Awards Received</p>
                        </div>
                    </Col>
                </Row>

                {/* Portfolio Section */}
                <Row className="about-portfolio align-items-center px-5">
                    <Col md={5}>
                        <p>
                            Annapurna Farms, we implement regenerative farming techniques such as crop rotation, companion planting,
                            and minimal tillage. By avoiding harmful pesticides and utilizing organic fertilizers, we maintain soil health.
                        </p>
                    </Col>
                    <Col md={5}>
                        <span>— Our Portfolio</span>
                        <h2 className="about-heading">
                            Taste the Authentic Difference: Pure, Fresh, and Natural Ingredients, Straight from the Farm.
                        </h2>
                    </Col>
                </Row>
            </Container>

            {/* Carousel Section */}
            <div className="about-carousel-container px-5">
                <div className="carousel-content">
                    <img src={slides[currentIndex].image} alt={slides[currentIndex].alt} className="about-carousel-image" />
                    <div className="carousel-overlay">
                        <p className="carousel-subtitle">{slides[currentIndex].subtitle}</p>
                        <h2 className="carousel-title">{slides[currentIndex].title}</h2>
                        <p className="carousel-text">{slides[currentIndex].description}</p>
                    </div>
                </div>

                {/* Arrows below the carousel, aligned to the right */}
                <div className="slider-arrow-container">
                    <button className="slider-arrow left" onClick={handlePrev}>←</button>
                    <button className="slider-arrow right" onClick={handleNext}>→</button>
                </div>
            </div>

        </div>
    );
};

export default About;
