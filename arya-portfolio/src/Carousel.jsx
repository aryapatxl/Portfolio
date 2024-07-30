import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slackImage from './images/slackImage.jpg';
import warrantsImage from './images/warrantsImage.png';
import epikImage from './images/epikImage.png';
import './MyCarousel.css';
import spotifyImage from './images/spotifyImage.png';
import CalcImage from "./images/CalcImage.png"

function SwipeToSlide() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 4,
      swipeToSlide: true,
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={slackImage} className="carousel-image" />
          </div>
          <div>
            <img src={warrantsImage} className="carousel-image" />
          </div>
          <div>
            <img src={epikImage} className="carousel-image" />
          </div>
          <div>
            <img src={spotifyImage} className="carousel-image" />
          </div>
          <div>
            <img src={CalcImage} className="carousel-image" />
          </div>
        </Slider>

      </div>
    );
  }
  
  export default SwipeToSlide;