import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

import Slider1 from "../../assets/Carousel-1.jpg";
import Slider2 from "../../assets/Carousel-2.jpg";
import Slider3 from "../../assets/Carousel-3.jpg";

const Sliders = () => {
    return (
        <div className="carousel-container">
            {/* REMOVE ARROWS by setting controls={false} */}
            <Carousel indicators={false} controls={false} interval={3000} className="carousel-custom">
                <Carousel.Item>
                    <img className="d-block w-100" src={Slider1} alt="Slide 1" />
                    <Carousel.Caption>
                        <h3>Your One-Stop Shop
                            for Quality <br></br>and Fresh Fruits
                            & Nuts</h3>
                        <p>Enjoy the best organic fruits and nuts sourced from trusted farms.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={Slider2} alt="Slide 2" />
                    <Carousel.Caption>
                        <h3>Your One-Stop Shop
                            for Quality <br></br>and Fresh Fruits
                            & Nuts</h3>
                        <p>Experience farm-fresh goodness delivered to your doorstep.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={Slider3} alt="Slide 3" />
                    <Carousel.Caption>
                        <h3>Purely natural, truly indian – farm-fresh<br></br> goodness for every meal</h3>
                        <p>Discover a variety of fresh and organic produce from local farmers.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    ); 
};

export default Sliders;