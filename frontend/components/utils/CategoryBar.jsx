import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles/Carousel.css"

import Slider from "react-slick";
import React from "react";

function CategoryBar() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">

        <div className='menu-body'>
          <div className='sticky-bar'>
          </div>
        </div> 



      <Slider {...settings}>
        
        <div className="carousel-cards">
          <h3>1</h3>
          <div className="cardText">
            <span className="cardTitle">

            </span>
            <span className="bottomText">
              <p className="categoryCard"></p>
              <button className="hero-btn">Get Now</button>
            </span>
          </div>
        </div>
        
        
        </Slider>
    </div>
  );
}

export default CategoryBar;