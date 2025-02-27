"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/icons/logo.svg";
import menu from "@/public/icons/menu.svg";

const menus = [
  { id: 1, name: "Home" },
  { id: 2, name: "About Us" },
  { id: 3, name: "Our Most Rated Guides" },
  { id: 4, name: "Our Packages" },
  { id: 5, name: "Most Desired Places" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="w-[95%] h-[90px] text-black md:flex hidden items-center justify-between">
        <Image src={logo} alt="tour buddy logo" />
        <div className="md:flex justify-center items-center md:space-x-1 lg:space-x-9">
          <ul className="flex md:space-x-5 lg:space-x-9 text-[#495560] md:text-[13px] lg:text-[15px] font-[600]">
            {menus.map((menu) => (
              <li
                key={menu.id}
                className="hover:text-black hover:underline underline-offset-8"
              >
                <Link href={"#"}>{menu.name}</Link>
              </li>
            ))}
          </ul>
          <button className="bg-[#FFDA32] text-[#1C2B38] font-[700] md:text-[14px] lg:text-[16px] md:px-4 lg:px-9 md:py-2 lg:py-3 rounded hover:bg-[#13253F] hover:text-[#FFDA32]">
            Sign In
          </button>
        </div>
      </div>
      {/* mobile screen */}
      <div className="w-[90%] text-black block md:hidden items-center justify-between">
        <div className="flex justify-between">
          <Image src={logo} alt="tour buddy logo" className="py-2" />
          <Image
            src={menu}
            alt="menu bar"
            width={30}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
        <div
          className={`flex flex-col ${
            isMenuOpen ? "block" : "hidden"
          } md:flex justify-center items-center md:space-x-1 lg:space-x-9`}
        >
          <ul className="flex flex-col text-[#495560] text-center text-[12px] font-[600]">
            {menus.map((menu) => (
              <Link href={"#"} 
              key={menu.id}>
                <li
                  className="py-3 hover:text-black hover:underline underline-offset-8"
                >
                  {menu.name}
                </li>
              </Link>
            ))}
          </ul>
          <button className="bg-[#FFDA32] w-[100%] text-[#1C2B38] font-[700] text-[12px] py-2 rounded hover:bg-[#13253F] hover:text-[#FFDA32]">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
