"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import ImageService from "./ImageService/ImageService";
import WhyChoose from "./WhyChoose/WhyChoose";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";
import Newletter from "./Newletter/Newletter";
import AOS from "aos";
import "aos/dist/aos.css";
import Service from "./Service/Service";

const Home = ({ services, imagesData }: { services: any; imagesData: any }) => {
  useEffect(() => {
    const initAOS = async () => {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Service services={services} />
      <ImageService imagesData={imagesData.imagesData} />
      <WhyChoose />
      <Reviews />
      <News />
      <Newletter />
    </div>
  );
};

export default Home;
