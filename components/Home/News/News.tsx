import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewCard from "./NewCard";

const getNews = async () => {
  const res = await fetch("http://localhost:5000/api/blogs");
  const data = await res.json();
  console.log(data);
  return data;
};

const News = () => {
  return (
    <div className="py-16">
      <SectionHeading heading="Exciting Travel News for You" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <NewCard
            image="/images/n1.jpg"
            title="top 10 place to visit in Australia"
            date="15 November 2024"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewCard
            image="/images/n2.jpg"
            title="top 10 place to visit in Bangladesh"
            date="3 December 2024"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewCard
            image="/images/n3.jpg"
            title="top 10 place to visit in Thailand"
            date="31 December 2024"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NewCard
            image="/images/n4.jpg"
            title="top 10 place to visit in Chiangmai"
            date="1 January 2025"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
