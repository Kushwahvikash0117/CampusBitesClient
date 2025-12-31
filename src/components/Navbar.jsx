import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = ({ setShowLogin, search, setSearch }) => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "text-(--tomato) font-semibold"
      : "text-gray-700";

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white ${
          shadow ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="section flex items-center justify-between h-16">
          {/* LOGO */}
          <Link to="/">
            <img
              src={assets.logo}
              alt="CampusBites"
              className="h-10 object-contain"
            />
          </Link>
          {/* 🔍 SEARCH BAR — ALWAYS VISIBLE */}
          <div className="px-4 pb-3 pt-4">
            <input
              type="text"
              placeholder="Search food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-xl mx-auto block
                       px-4 py-2 rounded-full border border-gray-300
                       focus:ring-2 focus:ring-(--tomato) outline-none"
            />
          </div>
          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={isActive("/app")}>
              Home
            </Link>

            <Link to="/cart" className={isActive("/cart")}>
              Cart
            </Link>
            <Link to="/order" className={isActive("/order")}>
              Orders
            </Link>

            <button
              onClick={() => setShowLogin(true)}
              className="px-4 py-2 rounded-full bg-(--tomato) text-white font-semibold"
            >
              Login
            </button>
          </div>

          {/* MOBILE MENU */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setOpen(true)}
          >
            <span className="w-6 h-0.75 bg-gray-800 rounded" />
            <span className="w-6 h-0.75 bg-gray-800 rounded" />
            <span className="w-6 h-0.75 bg-gray-800 rounded" />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE DRAWER (NO SEARCH HERE) */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-xs bg-white z-50
        transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/cart" onClick={() => setOpen(false)}>
            Cart
          </Link>
          <Link to="/order" onClick={() => setOpen(false)}>
            Orders
          </Link>

          <button
            onClick={() => {
              setShowLogin(true);
              setOpen(false);
            }}
            className="mt-2 px-4 py-2 rounded-lg bg-(--tomato) text-white font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;