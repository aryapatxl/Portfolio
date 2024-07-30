import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slackImage from './images/slackImage.jpg';
import warrantsImage from './images/warrantsImage';
import epikImage from './images/epikImage';
import './MyCarousel.css'; // Import custom styles
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
            <img src={slackImage} className="carousel-image" />
          </div>
        </Slider>
      </div>
    );
  }
  
  export default SwipeToSlide;