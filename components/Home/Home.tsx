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
import FetchData from "@/data/FetchData";

const Home = ({ services, imagesData }) => {
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
      {/* <Destination /> */}
      <Service services={services} />
      <ImageService imagesData={imagesData.imagesData} />
      {/* <FetchData /> */}
      <WhyChoose />
      <Reviews />
      <News />
      <Newletter />
    </div>
  );
};

export default Home;
