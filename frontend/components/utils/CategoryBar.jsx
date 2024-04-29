import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Carousel.css";
import Slider from "react-slick";
import React from "react";

const CategoryBar = ({ categories, filterItems }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="category-bar-container">
      <Slider {...settings}>
        {categories &&
          categories
            .filter(category => category) // Filter out undefined categories
            .map((category, index) => (
              <div className="carousel-cards" key={index}>
                <div className="cardText">
                  <span className="cardTitle"></span>
                  <button
                    type="button"
                    className="filter-btn-categories"
                    onClick={() => filterItems(category)}
                  >
                    {category}
                  </button>
                  <span className="bottomText">
                    <p className="categoryCard"></p>
                  </span>
                </div>
              </div>
            ))}
      </Slider>
    </div>
  );
};

export default CategoryBar;
