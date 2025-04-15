import SearchBox from "@/components/Helper/SearchBox";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      <video
        // src="/images/hero1.mp4"
        src="/images/TP-02.webm"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Text content */}
      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div data-aos="fade-up">
            <div  className="w-[80%] text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.2rem] text-white font-bold uppercase ">
              <h1>
                ผู้รับเหมางานก่อสร้างที่คุณไว้ใจได้ ไม่ทิ้งงาน
                ดูแลงานเองทุกขั้นตอน
              </h1>
              <h2 className="lg:text-[25px] font-semibold ">
                คุณเคยเจอปัญหาแบบนี้จากผู้รับเหมาไหม?
              </h2>
                <ul className="text-left text-lg font-normal w-[50%] ">
                  <li className="before:content-['✕'] before:mr-2">ผู้รับเหมาทิ้งงานกลางคัน</li>
                  <li className="before:content-['✕'] before:mr-2">งานเสร็จไม่ตรงเวลา</li>
                  <li className="before:content-['✕'] before:mr-2">เก็บเงินแล้วไม่กลับมาทำต่อ</li>
                  <li className="before:content-['✕'] before:mr-2">งานไม่ตรงตามสเปค หรือไม่ได้คุณภาพ</li>
                  <li className="before:content-['✕'] before:mr-2">ไม่ลงมาคุมงานหน้างานเลย</li>
                </ul>
            </div>
          </div>
          {/* Search Box */}
          <SearchBox />
          <Link
            href="#"
            className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset hover:ring-red-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-bold">Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
