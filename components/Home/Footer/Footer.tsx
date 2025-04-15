"use client";
import { FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constant/constant";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="py-16">
      <div
        className={`${
          pathname !== "/"
            ? "w-full bg-blue-950 text-white py-10"
            : "text-gray-800"
        }`}
      >
        {/* <div
          className={`w-[80%] ${
            pathname !== "/" ? "bg-blue-500" : ""
          }  mx-auto items-start grid-cols-2 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10`}
        > */}
        <div className="w-[80%] mx-auto items-center grid-cols-2 sm:grid-cols-1 grid md:grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 1st part  */}
          <div className="space-y-5">
            <h1 className="text-lg font-bold">Company</h1>
            {navLinks.map((item) => {
              return (
                <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
                  <Link key={item.id} href={item.url}>{item.label}</Link>
                </p>
              );
            })} 
          </div>
          {/* 2th part  */}
          <div>
            <h1 className="text-lg font-bold">Contact us</h1>
            <div className="mt-6">
              <h1 className="text-sm">บริษัท ธีรพงษ์ เซอร์วิส จำกัด</h1>
              <h1 className="text-base font-bold">
                เลขที่ 14 หมู่ที่ 5 ต.บางกร่าง อ.เมืองนนทบุรี จ.นนทบุรี
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-sm">โทร</h1>
              <h1 className="text-base font-bold">062-718-8847</h1>
            </div>
            <div className="mt-6">
              <h1 className="text-sm">Email</h1>
              <h1 className="text-base font-bold">
                theeraphong.services@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Bottom Section  */}
        <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p className="text-center md:text-left">
            Copyright &copy; 2024 Webdev. All rights reserved
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Social : </span>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaTiktok />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
