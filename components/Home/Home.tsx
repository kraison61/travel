import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import ImageService from "./ImageService/ImageService";
import WhyChoose from "./WhyChoose/WhyChoose";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <ImageService />
      <WhyChoose />
      <Reviews />
      <News />
    </div>
  );
};

export default Home;
