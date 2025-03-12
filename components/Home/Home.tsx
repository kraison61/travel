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
import { Images } from "lucide-react";

type serviceType = {
  id: number;
  service_id: number;
  kw_title: string;
  kw_des: string;
  kw_h1: string;
  kw_top1: string;
  kw_con1: string;
  kw_con2: string;
  kw_img1: string;
  kw_img2: string;
  created_at: string;
  updated_at: string;
  topalt: string;
  bottomalt: string;
  image?: string;
};

const Home = ({ services, imagesData }: { services: serviceType[] }) => {
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
      <ImageService imagesData={imagesData} />
      {/* <FetchData /> */}
      <WhyChoose />
      <Reviews />
      <News />
      <Newletter />
    </div>
  );
};

export default Home;
