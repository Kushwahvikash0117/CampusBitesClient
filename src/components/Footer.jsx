import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 mt-20 pt-14 pb-8">
      
      {/* MAIN GRID */}
      <div className="section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* BRAND */}
        <div className="space-y-4">
          <img
            src={assets.logo}
            className="h-12 w-auto object-contain"
            alt="CampusBites"
          />

          <p className="text-sm leading-relaxed max-w-sm">
            Campus Bites is your smart student-friendly food ordering app.
            Browse menus, skip the lines, and get your food faster — every time.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-2">
            <img
              src={assets.facebook_icon}
              alt="fb"
              className="h-8 w-8 cursor-pointer hover:scale-110 transition"
            />
            <img
              src={assets.twitter_icon}
              alt="tw"
              className="h-8 w-8 cursor-pointer hover:scale-110 transition"
            />
            <img
              src={assets.linkedin_icon}
              alt="ln"
              className="h-8 w-8 cursor-pointer hover:scale-110 transition"
            />
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-(--tomato) transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-(--tomato) transition">
              About Us
            </li>
            <li className="cursor-pointer hover:text-(--tomato) transition">
              Delivery Info
            </li>
            <li className="cursor-pointer hover:text-(--tomato) transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              +91-111-111-1111
            </li>
            <li className="hover:text-white transition cursor-pointer">
              contact@campusbites.com
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} CampusBites — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;