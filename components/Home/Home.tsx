"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import ImageService from "./ImageService/ImageService";
import WhyChoose from "./WhyChoose/WhyChoose";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";
import Newletter from "./Newletter/Newletter";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async()=>{
      await import ('aos')
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement:"top-bottom"
      })
    }
    initAOS()
  },[]);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <ImageService />
      <WhyChoose />
      <Reviews />
      <News />
      <Newletter />
    </div>
  );
};

export default Home;
