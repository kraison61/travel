"use client";

import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  const pathname = usePathname();

  console.log(pathname); // ตัวอย่าง: /products/123
  return (
    <div className="justify-items-center object-center">
      <div className="">
        {/* Text Content  */}
        {/* Slider  */}
        <div className="overflow-hidden pt-36">
          <h1 className="text-2xl font-semibold text-gray-800 py-10 text-center">
            ติดต่อเรา
          </h1>
          <Image
            src="/images/d1.jpg"
            width={500}
            height={500}
            alt="image-1"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="w-[80%] mx-auto items-center mt-10">
        {/* Text Content  */}
        <div>
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

export default ContactPage;
