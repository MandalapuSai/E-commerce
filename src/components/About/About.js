import React, { useState, useEffect } from "react";
import "./About.css";

import AboutBanner from "../../assets/about-banner.png";
import AboutBanner1 from "../../assets/About-banner-1.png";
import AboutBanner2 from "../../assets/About-banner-2.png";
import AboutBanner3 from "../../assets/About-banner-3.png";
import AboutUs from "../../assets/about-img.png";

const About = () => {
  const slides = [
    {
      image: AboutBanner1,
      alt: "About Carousel Image 1",
      title: "Experience the Purity of Nature",
      subtitle: "Fresh Fruits",
      description:
        "We bring you the freshest, juiciest, and most flavorful organic fruits, packed with natural goodness.",
    },
    {
      image: AboutBanner2,
      alt: "About Carousel Image 2",
      title: "Taste the Goodness of Nature",
      subtitle: "Dry Fruits",
      description:
        "We bring you the freshest, crunchiest, and most flavorful organic dry fruits, packed with natural goodness.",
    },
    {
      image: AboutBanner3,
      alt: "About Carousel Image 3",
      title: "Up Your Life Naturally",
      subtitle: "Masalas",
      description:
        "We bring you the freshest, most aromatic, and most flavorful organic masalas, packed with natural goodness.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div class="about-section">
      <div className="about-section-containers">
        <div
          className="about-section-carousel-image"
          style={{
            backgroundImage: `url(${AboutBanner})`,
          }}
        ></div>
      </div>
      {/* About Content Section */}
      <div className="content-section">
        <div className="content-image">
          <img src={AboutUs} alt="About" className="about_img" />
        </div>
        <div className="content-text-about">
          <span className="name">— Our Mission</span>
          <h2 className="content-heading">Who we are ?</h2>
          <p className="content-text-para">
            Annapurna Organic, we believe in the power of nature and the purity
            of organic farming. Our journey began with a simple vision: to
            provide healthy, fresh, and natural produce while supporting
            sustainable farming practices. As a family-owned business, we are
            passionate about bringing you the best of nature's bounty, grown
            without harmful chemicals or synthetic pesticides.
          </p>
          {/* <button className="read_more_button">Read More</button> */}
        </div>
      </div>

      {/* Numbers Section */}
      <div className="about-grid-container">
        <div className="about-grid-item-start">
          <span>— We in numbers</span>
          <h2 className="about-numbers-heading">
            Teams were able to drive adoption and awareness marketing computer
            development html roi feedback team website or turn the ship deep
            dive but touch base.
          </h2>
        </div>

        <div className="about-grid-item-one">
          <h2 className="about-grid-item-heading">924</h2>
          <p className="about-grid-item-para">SATISFACTION CLIENTS</p>
        </div>

        <div className="about-grid-item-two">
          <h2 className="about-grid-item-heading">35</h2>
          <p className="about-grid-item-para">AWARDS RECEIVED</p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-container">
        <div className="portfolio-container-first">
          <p className="portfolio-container-para">
            Annapurna Farms, we implement regenerative farming techniques such
            as crop rotation, companion planting, and minimal tillage. By
            avoiding harmful pesticides and utilizing organic fertilizers, we
            not only maintain soil health but also enhance biodiversity on our
            land.
          </p>
        </div>
        <div className="Our-portfolio-container-one">
          <span>— Our portfolio</span>
          <h2 className="our-protfolio-heading2">
            Taste the Authentic Difference: Pure, Fresh, and Natural
            Ingredients, Straight from the Farm
          </h2>
        </div>
      </div>

      <div className="portfolio-carousel-container">
        <div className="portfolio-carousel">
          <button
            className="slider-arrow slider-arrow-left"
            onClick={handlePrev}
          >
            ←
          </button>

          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].alt}
            className="portfolio-carousel-image"
          />

          <div className="carousel-overlay_00">
            <p className="carousel-subheading_99">
              {slides[currentIndex].subtitle}
            </p>
            <h2 className="carousel-heading_99">
              {slides[currentIndex].title}
            </h2>
            <p className="carousel-description_99">
              {slides[currentIndex].description}
            </p>
          </div>

          <button
            className="slider-arrow slider-arrow-right"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
