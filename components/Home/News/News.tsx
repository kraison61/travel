import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewCard from "./NewCard";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
export const getNews = async () => {
  const res = await fetch("http://localhost:5000/api/blogs");
  const data = await res.json();
  console.log("data", data);
  return data;
};


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



const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setNewsData(data.blogs);
    };

    fetchNews();
  }, []);

  return (
    <div className="py-16">
      <SectionHeading heading="บทความ และข่าวสารต่าง ๆ" title="รวมบทความ รูปภาพ ข่าวสาร และกิจการต่าง ๆ ที่ทางธีรพงษ์เซอร์วิสได้ดำเนินการ"/>
      <div className="mt-14 w-[80%] mx-auto">
      <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          // autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {newsData && newsData.map((news, index) => (
            <div
              key={news.id || index}
              className="m-3"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={index * 100}
            >
              <NewCard
                image={`/${news.image}`}
                title={news.title}
                date={news.date}
                id={news.id}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default News;
