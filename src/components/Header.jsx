import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="section mt-20">
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] rounded-xl overflow-hidden shadow-md">

        {/* Banner Image */}
        <img
          src={assets.header_img}
          alt="Campus Bites Banner"
          className="w-full h-full object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Text Box */}
        <div className="absolute bottom-6 left-6 sm:left-10 text-white space-y-2 sm:space-y-4 max-w-[80%] sm:max-w-[55%]">

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight drop-shadow-lg">
            Hungry? Get your food faster.
          </h2>

          <p className="hidden sm:block text-sm md:text-base opacity-90 leading-relaxed">
            Skip the queue. Order from any campus canteen with one tap.
          </p>

          <a
            href="#explore-menu"
            className="inline-block bg-white text-(--tomato) font-semibold px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;