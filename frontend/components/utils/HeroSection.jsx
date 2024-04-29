import React from "react";
import CarouselRes from "./Carousel";
import "./styles/HeroStyles.css"
function HeroSection(){
  return(
    <div className="HeroSection">
    <h1>HeroSection</h1>
      <CarouselRes />
    </div>
  );
}

export default HeroSection;