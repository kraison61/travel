import SectionHeading from "@/components/Helper/SectionHeading";
import React, { useEffect, useState } from "react";
import NewCard from "./NewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface NewsItem {
  id: string;
  image: string;
  title: string;
  date: string;
}

const News = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setNewsData(data.blogs || []);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <SectionHeading
        heading="บทความ และข่าวสารต่าง ๆ"
        title="รวมบทความ รูปภาพ ข่าวสาร และกิจการต่าง ๆ ที่ทางธีรพงษ์เซอร์วิสได้ดำเนินการ"
      />

      <div className="mt-14 w-[90%] mx-auto max-w-7xl">
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">Error: {error}</div>
        ) : (
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["mobile"]}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {newsData.map((news, index) => (
              <div
                key={news.id || index}
                className="px-2 py-4"
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
        )}
      </div>
    </div>
  );
};

export default News;
