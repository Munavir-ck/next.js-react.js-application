"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="w-full h-20 border-gray-500 text-white bg-black">
      <div className="p-5">
        <div className="hidden lg:flex max-w-screen-2xl h-full mx-auto px-4 items-center justify-between">
          <h1 className="text-2xl uppercase font-bold">Logo</h1>
          <ul className="flex items-center gap-8 uppercase text-sm font-semibold">
            <li className="navbarLi">Home</li>
            <li className="navbarLi">About Us</li>
            <li className="navbarLi">Our Blog</li>
            <li className="navbarLi">Support</li>
            <li className="navbarLi">Affiliate</li>
          </ul>
          <ul className="flex items-center gap-8 uppercase text-sm font-semibold">
            <li>Login</li>
            <CustomButton style={"w-20 text-white "} title={"Signup"} />
          </ul>
        </div>

        <div className="lg:hidden flex justify-between items-center">
          <div>
            <h1 className="text-2xl uppercase font-bold">Logo</h1>
          </div>
          <div className="float-right" onClick={handleMenuClick}>
            <span className="text-3xl cursor-pointer">
              {" "}
              <div className="lg:hidden float-right">
                <BiMenu className="text-3xl" />
              </div>
            </span>
          </div>
        </div>

        {menuVisible && (
          <div className="lg:hidden">
            <div className="h-60 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 relative rounded-lg w-2/4 p-4">
              <ul className="text-white items-center uppercase text-sm font-semibold flex-col justify-between space-y-4">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Blog</li>
                <li>Support</li>
                <li>Affiliate</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
