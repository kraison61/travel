"use client";

import React, { useEffect, useState } from "react";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const pathname = usePathname();

  return (
    <div
      className={`${
        navBg || pathname !== "/" ? "bg-blue-950 shadow-md" : "fixed"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="w-30 h-30 rounded-full flex items-center justify-center flex-col">
              <Logo />
            </div>
          </div>
        </Link>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Button */}
        <div className="flex items-center space-x-4">
          <Button className="md:px-12 md:py-2.5 px-8 py-2 font-semibold text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
            Login
          </Button>

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
