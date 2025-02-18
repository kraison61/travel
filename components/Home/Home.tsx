import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import ImageService from "./ImageService/ImageService";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <ImageService />
    </div>
  );
};

export default Home;
