import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles/Carousel.css"

import React from "react";
import Slider from "react-slick";

function CarouselRes() {
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
        <div className="carousel-cards">
          <h3>2</h3>
          <div className="cardText">
            <span className="cardTitle">

            </span>
            <span className="bottomText">
              <p className="categoryCard"></p>
              <button className="hero-btn">Get Now</button>
            </span>
          </div>
        </div>
        <div className="carousel-cards">
          <h3>3</h3>
          <div className="cardText">
            <span className="cardTitle">

            </span>
            <span className="bottomText">
              <p className="categoryCard"></p>
              <button className="hero-btn">Get Now</button>
            </span>
          </div>
        </div>
        <div className="carousel-cards">
          <h3>4</h3>
          <div className="cardText">
            <span className="cardTitle">

            </span>
            <span className="bottomText">
              <p className="categoryCard"></p>
              <button className="hero-btn">Get Now</button>
            </span>
          </div>
        </div>
        <div className="carousel-cards">
          <h3>5</h3>
          <div className="cardText">
            <span className="cardTitle">

            </span>
            <span className="bottomText">
              <p className="categoryCard"></p>
              <button className="hero-btn">Get Now</button>
            </span>
          </div>
        </div>
        <div className="carousel-cards">
          <h3>6</h3>
          <div className="cardText">
            <span className="cardTitle">

            </span>
            <span className="bottomText">
              <p className="categoryCard"></p>
              <button className="hero-btn">Get Now</button>
            </span>
          </div>
        </div>
        <div className="carousel-cards">
          <h3>7</h3>
          <div className="cardText">
            <span className="cardTitle">

            </span>
            <span className="bottomText">
              <p className="categoryCard"></p>
              <button className="hero-btn">Get Now</button>
            </span>
          </div>
        </div>
        <div className="carousel-cards">
          <h3>8</h3>
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

export default CarouselRes;
