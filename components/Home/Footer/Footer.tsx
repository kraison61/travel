"use client";
import { FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <div className="w-[80%] mx-auto items-start grid-cols-2 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 1st part  */}
          <div className="space-y-5">
            <h1 className="text-lg font-bold">Company</h1>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              About Us
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Careers
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Blogs
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Gift Cards
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Magazine
            </p>
          </div>
          {/* 2nd part  */}
          <div className="space-y-5">
            <h1 className="text-lg font-bold">Support</h1>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Contact
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Legal Notice
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Privacy Policy
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Terms & Conditions
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Sitemap
            </p>
          </div>
          {/* 3rd part  */}
          <div className="space-y-5">
            <h1 className="text-lg font-bold">Other Services</h1>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Car hire
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Activity Finder
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Tour List
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Flight Finder
            </p>
            <p className="font-medium cursor-pointer text-sm hover:text-blue-950">
              Travel Agents
            </p>
          </div>
          {/* 4th part  */}
          <div>
            <h1 className="text-lg font-bold">Contact us</h1>
            <div className="mt-6">
              <h1 className="text-sm">Our Mobile Number</h1>
              <h1 className="text-base font-bold">+66 123 45678</h1>
            </div>
            <div className="mt-6">
              <h1 className="text-sm">Our Email</h1>
              <h1 className="text-base font-bold">oun.cav@gmail.com</h1>
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
