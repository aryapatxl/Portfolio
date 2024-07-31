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
import { Link } from 'react-router-dom';

function SwipeToSlide() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 4,
      swipeToSlide: true,
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Link to="/SlackBot">
              <img src={slackImage} className="carousel-image" alt="Slack" />
            </Link>
          </div>

          <div>
            <Link to="/Warrants">
            <img src={warrantsImage} className="carousel-image" alt="warrantsImage" />
            </Link>
          </div>

          <div>
            <Link to="/AIConversationCatalyst">
            <img src={epikImage} className="carousel-image" />
            </Link>
          </div>

          <div>
            <Link to="/FinancialCalculatorAPI">
            <img src={CalcImage} className="carousel-image" />
            </Link>
          </div>
        </Slider>

      </div>
    );
  }
  
  export default SwipeToSlide;