"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

const About = () => {
  const pathname = usePathname();

  console.log(pathname); // ตัวอย่าง: /products/123
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10 pt-36">
        {/* Text Content  */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            What our customers are saying us?
          </h1>
          <p className="mt-6 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            dolorum. Illo nemo sapiente, soluta quis consectetur eum explicabo?
            Quo, perspiciatis inventore iusto sit enim maiores similique illo
            architecto autem nostrum tenetur molestiae dolor voluptatem aliquam
            consequatur illum placeat ratione. Unde repellat fugiat minima
            repudiandae ullam quos! Voluptates ullam similique tempora?
          </p>
        </div>
        {/* Slider  */}
        <div className="overflow-hidden flex justify-center items-center">
          <Image
            src="/images/d1.jpg"
            width={400}
            height={400}
            alt="image-1"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {/* Text Content  */}
        <div className="overflow-hidden flex justify-center items-center">
          <Image
            src="/images/d2.jpg"
            width={400}
            height={400}
            alt="image-2"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            What our customers are saying us?
          </h1>
          <p className="mt-6 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            dolorum. Illo nemo sapiente, soluta quis consectetur eum explicabo?
            Quo, perspiciatis inventore iusto sit enim maiores similique illo
            architecto autem nostrum tenetur molestiae dolor voluptatem aliquam
            consequatur illum placeat ratione. Unde repellat fugiat minima
            repudiandae ullam quos! Voluptates ullam similique tempora?
          </p>
        </div>
        {/* Slider  */}
      </div>
    </div>
  );
  
};

export default About;
