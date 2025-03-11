"use client";

import { destinationData } from "@/data/data";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

type serviceProps = {
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



const DestinationSlider = ({
  services
}: {
  services: serviceProps[];
}) => {
  if (services && services.length > 0) {
  } else {
    console.log("Services array is empty or undefined.", services);
  }
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      {/* {{ dataServices }} */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {destinationData.map((data) => {
          return (
            <div key={data.id} className="m-3">
              <div className="relative h-[400px]">
                {/* overlay  */}
                <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                {/* Image  */}
                <Image
                  src={data.image}
                  alt={data.country}
                  width="500"
                  height="500"
                  className="h-full w-full object-cover rounded-md"
                />
                {/* Text Slider  */}
              </div>
              <h1 className="text-lg font-semibold mt-4">{data.country}</h1>
              <p className="text-sm text-gray-600">วันที่ : {formattedDate}</p>
            </div>
          );
        })}
      </Carousel>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {services.map((data) => {
          return (
            <div key={data.id} className="m-3">
              <div className="relative h-[400px]">
                {/* overlay  */}
                <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                {/* Image  */}
                <Image
                  src={"/" + data.kw_img1}
                  alt={data.topalt}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover rounded-md"
                  style={{ objectFit: "cover" }}
                />
                {/* Text Slider  */}
              </div>
              <h1 className="text-lg font-semibold mt-4">
                {data.service_names.service_name}
                
              </h1>
              {/* <p className="text-sm text-gray-600">วันที่ : {data.kw_img1}</p> */}
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default DestinationSlider;
